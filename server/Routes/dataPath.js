const express = require("express");
const router = express.Router();
const data = require("../models/dataSchema")


router.get("/api/data", (req, res) => {
  //console.log(data.find());
  //const getData = data.find();

  //console.log(stringify(data.find({})));

  //res.send(stringify(data.find({})));

  data.find({},function(err,result){
    if(err){
      console.log(err);
    }
    else{
      
      //console.log(result);
      res.send(result);
    }
  })

  
  //console.log(getData);

  //res.status(200).send(data.find({}));
});

module.exports = router;
