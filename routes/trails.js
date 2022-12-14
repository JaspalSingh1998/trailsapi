const express = require('express')
const router = express.Router();
const Trail = require('../models/Trail');

// All trails
router.get('/', async (req, res) => {
    try {
        const trails = await Trail.find()
        res.json({trails})
    } catch (error) {
        res.status(400);
    }
})

// Top trails
router.get('/top', async (req, res) => {
    console.log('hii')
    try {
        const trails = await Trail.find().sort({ _id: -1 }).limit(5)
        res.json({trails})
    } catch (error) {
        res.status(400);
    }
})

router.post('/', async (req, res) => {
    const trail = new Trail(req.body);
    try {
        const newTrail = await trail.save();
        res.status(201).json(newTrail)
    } catch (error) {
        res.status(400);
    }
})

router.get('/:id', (req, res) => {
    try {
        const trail = Trail.findById(req.params.id)
        res.json(trail)
    } catch (error) {
        res.status(400);
    }
})
module.exports = router;