const router = require('express').Router();
// sending data to browser through script with index.html

router
  .get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

module.exports= router