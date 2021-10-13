const express = require("express");

const router = express.Router();

router.get("/page3_1", (req, res) => {
    res.render("page3_1")
});

router.get("/page3_2", (req, res) => {
    res.render("page3_2")
});

router.get("/page3_3", (req, res) => {
    res.render("page3_3")
});

module.exports = router;