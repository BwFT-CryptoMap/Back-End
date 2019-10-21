const axios = require('axios')
const router = require('express').Router()
const dbModel = require(`./watchlist-model`)

router
  .get('/',(req,res)=>{
      return axios.get('https://data.messari.io/api/v1/markets/prices-legacy') 
      data.messari.io/api/v1/trades/gemini/btc-usd
      .then(coin => {
        res.status(200).send(coin.data.data) })
      .catch(e=>{
        console.log(e)  
        res.status(404).send({message:'SOMEMESSAGE', ...e})})
    // return dbModel.findWatchlistByUserId(1)
    // .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
    // .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
// router
//   .get('/:id',(req,res)=>{
//     const {id}=req.params
//     return dbModel.findAllById(id)
//     .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })
  
// router
//   .post('/',(req,res)=>{
//     const {body}=req
//     return dbModel.add(body)
//     .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })
// router
//   .put('/:id',(req,res)=>{
//     const {id}=req.params
//     const {body}=req
  
//     return dbModel.editById(id)
//     .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })
// router
//   .delete('/:id',(req,res)=>{
//     const {id}=req.params
    
//     return dbModel.remove(id)
//     .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })
module.exports=router
