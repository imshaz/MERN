
const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    res.send("get single user by id")
})



module.exports = router; 