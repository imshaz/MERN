// this is test file and is created for git practice/excerices only

//tobe delete

const express = require('express');

const router = express.Router();

//@route   GET api/feature/id
//@desc    get feature by id
//@access   public    
router.get('/:id', (req, res) => {
    res.send("get single feature by id")
})

//@route   get api/features
//@desc    get list of featujres 
//@access   public    
router.get('/', (req, res) => {
    res.send("get features")
})


module.exports = router; 