const express = require('express')
const router = express.Router();

const userCon = require('../controllers/users')
const validation = require('../middleware/validate');

router.get('/', userCon.getAll);

router.get('/:id', userCon.getOne);

router.post('/', validation.saveContact, userCon.createUser);

router.put('/:id', validation.saveContact, userCon.updateUser );

router.delete('/:id', userCon.deleteUser);

module.exports = router;