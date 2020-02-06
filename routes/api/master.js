
const express = require('express');

const router = express.Router();
router.get('/:id', (req, res) => {
    res.send("get single user by id")
})

//@route   get api/users
//@desc    get list of users 
//@access   public    
router.get('/', (req, res) => {
    res.send("get users")
})


module.exports = router; 