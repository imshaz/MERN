const express = require('express'); 

const router = express.Router(); 

//@route   GET api/auth
//@desc    Test Route
//@access   public    
router.get('/', (req, res)=>{
    res.send("get auth")
})


module.exports = router; 