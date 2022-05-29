//import express
const express = require("express");
const router = express.Router();
const Aliens = require('../models/alien');

//GET ALL request
router.get('/', async(req, res) => {
    try {
        const aliens = await Aliens.find()
        res.json(aliens)
    } catch(err) {
        res.send('Error' + err)
    }
})

//GET by ID request
router.get('/:id', async(req, res) => {
    try {
        const aliens = await Aliens.findById(req.params.id)
        res.json(aliens)
    } catch(err) {
        res.send('Error' + err)
    }
})


//POST request
router.post('/', async(req, res) => {
    const alien = new Aliens ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        let data1 = await alien.save()
        res.send(data1)
    } catch (err) {
        res.send('Error: ' + err)
    }
})


//export the router
module.exports = router;