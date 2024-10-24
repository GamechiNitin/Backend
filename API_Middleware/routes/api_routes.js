const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    console.log("Middleware Data :");
    console.log(req.body);
    res.send("Get Call Birds")
})

router.post('/items', (req, res) => {
    res.send("Post Call");
})

router.put('/items:id', (req, res) => {
    res.send('Put call')
})

router.delete('/items:id', (req, res) => {
    res.send('Delete Call')
})

module.exports = router