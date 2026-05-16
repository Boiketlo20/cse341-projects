const { ObjectId } = require('mongodb');
const mongodb = require('../database/data');

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

module.exports = { getAll, getOne}

 