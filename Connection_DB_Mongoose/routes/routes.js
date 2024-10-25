const router = require("express").Router()


const User = require('../models/userModel')


// Curd
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.post('/users', async (req, res) => {
    try {
        console.log("Post call")
        const { name, age } = req.body;

        const newUser = new User({ name, age });
        await newUser.save();

        res.status(200).json({
            success: true,
            user: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const updateUser = await User.findByIdAndUpdate(id, { name, age });
        if (!updateUser) {
            res.json({ message: "User not found" })
        }
        res.status(200).json({
            success: true,
            user: updateUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            res.json({ message: "User not found" })
        }
        res.status(200).json({
            success: true,
            user: deleteUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router
