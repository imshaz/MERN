const express = require('express');

const router = express.Router();

//@route   get api/users
//@desc    get list of users 
//@access   public    
router.get('/', (request, response) => {
    res.send("get users")
})

//@route   GET api/user/id
//@desc    get user by id
//@access   public    
router.get('/:id', (req, res) => {
    res.send("get single user by id")
})



module.exports = router; 