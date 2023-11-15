const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Define your routes here
router.get('/', controllers.home);
router.post('/create', controllers.create);
router.get('/read', controllers.read);
router.put('/update', controllers.update);
router.delete('/delete', controllers.delete);

module.exports = router;