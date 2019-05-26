const express = require('express'); 

const router = express.Router(); 

//@route   GET api/profile
//@desc    Test Route
//@access   public    
router.get('/', (req, res)=>{
    res.send("get profile")
})


module.exports = router; 