const express = require('express')
const router = express.Router();

const userCon = require('../controllers/users')

router.get('/', userCon.getAll);

router.get('/:id', userCon.getOne);

module.exports = router;