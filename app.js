const express = require("express");
const morgan = require("morgan");
const globalRouter = require("./routers/globalRouter");
const section1Router = require("./routers/section1Router")
const section2Router = require("./routers/section2Router")
const section3Router = require("./routers/section3Router")
const path = require("path")

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/section1", section1Router);
app.use("/section2", section2Router);
app.use("/section3", section3Router);

app.listen(PORT, () => {
    console.log("4000 PORT Start");
});