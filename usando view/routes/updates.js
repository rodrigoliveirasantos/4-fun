const data = require('../data/updates.json');
const express = require('express');
const router = express.Router()

router.get('/updates', (req, res) => {
    res.render('updates.pug', { updates: data })
})

module.exports = router;

