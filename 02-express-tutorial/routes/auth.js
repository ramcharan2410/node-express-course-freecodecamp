const express = require('express');
const router = express.Router();

// here we set the base root as /login in 12-router-app.js, hence, in this file, '/' === '/login'
router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

module.exports = router;