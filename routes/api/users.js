const express = require('express'); 

const router = express.Router(); 

//@route   GET api/user
//@desc    Test Route
//@access   public    
router.get('/', (req, res)=>{
    res.send("get users")
})


module.exports = router; 