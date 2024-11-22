const express = require('express');
const { handlePost, handleGet } = require('../controllers/apiController');
const router = express.Router();

router.post('/', handlePost);
router.get('/', handleGet);

module.exports = router;
