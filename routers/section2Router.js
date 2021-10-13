const express = require("express");

const router = express.Router();

router.get("/page2_1", (req, res) => {
    res.render("page2_1")
});

router.get("/page2_2", (req, res) => {
    res.render("page2_2")
});

router.get("/page2_3", (req, res) => {
    res.render("page2_3")
});


module.exports = router;