const express = require("express");

const router = express.Router();

router.get("/page1_1", (req, res) => {
    res.render("page1_1")
});

router.get("/page1_2", (req, res) => {
    res.render("page1_2")
});


module.exports = router;