const express = require('express');
const router = express.Router();
const {User} = require('../sequelize');

// the secret route
router.route("/").get(async (req, res, next) => {
    res.status(200).json({
        success: true, data: req.user.secretImg
    })
});

module.exports = router;
