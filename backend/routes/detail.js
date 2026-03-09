const express = require('express');
const router = express.Router();

const { getDetails } = require('../controllers/detailsController');

router.get('/users', getDetails);
router.get('/users/:id', getDetails);

module.exports = router;