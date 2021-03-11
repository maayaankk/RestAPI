const express = require('express');
const router = new express.Router();
// Now we will handle post request.

const MensRanking = require("../models/mens");

router.post('/mens', async(req, res) => {
    try{
        const addingMensRecords =  new MensRanking(req.body)
        console.log(req.body);
         const insertMens = await addingMensRecords.save();
         res.status(201).send(insertMens);
    }catch(err){
        res.status(400).send(err);
    }
})

// Now we will handle get request.

router.get('/mens', async(req, res) => {
    try{
       const getMens = await MensRanking.find({}).sort({"ranking": 1});
         res.send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
})

// handelling get req of indivdual 

router.get('/mens/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
         res.send(getMen);
    }catch(err){
        res.status(400).send(err);
    }
})

// handelling patch==update req of individual

router.patch('/mens/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
         res.send(getMen);
    }catch(err){
        res.status(500).send(err);
    }
})

// handelling the delete req

router.delete('/mens/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
         res.send(getMen);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;
