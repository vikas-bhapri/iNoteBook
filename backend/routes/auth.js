const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')


// Create a user using POST "/api/auth". No auth required
router.post('/', [
    body('name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter atleast 8 characters').isLength({min:8})
],  (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user)).catch(err=>{
        console.log(err);
        res.status(400).json({error:'Please enter valid credentials'})
      })

})

module.exports = router