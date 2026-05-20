const { ObjectId } = require('mongodb');
const mongodb = require('../database/data');
const { response } = require('express');

const getAll = async(req, res) => {
    const result = await mongodb.getDb().db('cse-contacts').collection('contacts').find();
    result.toArray().then((contacts) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
}

const getOne = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse-contacts').collection('contacts').find({_id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    })
}

const createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db('cse-contacts').collection('contacts').insertOne(user);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the contact.');
    }
};

const updateUser = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db('cse-contacts').collection('contacts').replaceOne({_id: contactId}, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the contact.');
    }
};

const deleteUser = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('cse-contacts').collection('contacts').deleteOne({_id: contactId}, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the contact.');
    }
};

module.exports = { getAll, getOne, createUser, updateUser, deleteUser};

 