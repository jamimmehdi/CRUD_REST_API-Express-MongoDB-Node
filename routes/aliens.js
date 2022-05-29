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

//GET by ID request
router.get('/:id', async(req, res) => {
    try {
        const aliens = await Aliens.findById(req.params.id)
        res.json(aliens)
    } catch(err) {
        res.send('Error' + err)
    }
})

//PATCH by ID request
router.patch('/:id', async(req, res) => {
    try {
        const alien = await Aliens.findById(req.params.id)
        alien.sub = req.body.sub
        const updatedData = await alien.save()
        res.send(updatedData)
    } catch(err) {
        res.send('Error: ' + err)
    }
})

//DELETE by ID request
router.delete('/:id', (req, res) => {
    try {
        Aliens.findByIdAndDelete(req.params.id).then(data => {
            if(!data) {
                res.send('id not found')
            } else {
                res.send('deleted')
            }
        })
    } catch (err) {
        res.send('Error: ' + err)
    }
})


//export the router
module.exports = router;