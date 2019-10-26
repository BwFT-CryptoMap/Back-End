const axios = require("axios");
const router = require("express").Router();
const dbModel = require(`./watchlist-model`);

const Auth = require('../auth/authenticate-middleware')

router.use("/*", (req, res, next) => {
  return axios
    .get("https://data.messari.io/api/v1/markets/prices-legacy")
    .then(coin => {
      req.data = coin.data.data;
      next();
    })
    .catch(e => {
      console.log(e);
      next();
    });
});

router
  .get('/:id/watchlist',(req,res)=>{
    const {id}=req.params
    return dbModel.findAllById(id)
    .then(p=>{
      console.log("here",p)
      const newData = req.data.find(coin => p[0]['coin-id'] === coin.id)
      console.log("1",newData)
      res.status(200).json({message:`SUCCESS`,newData})})
    .catch(e=>{res.status(500).json({message:'SOMEMESSAGE', ...e})})
})

router
  .post('/watchlist',(req,res)=>{
    return dbModel.add(req.body)
    .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})

router
  .delete('/watchlist/:id',(req,res)=>{
    const {id}=req.params

    return dbModel.remove(id)
    .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
module.exports=router
