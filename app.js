const express = require("express");
const app = express();
const rp = require("request-promise");

app.use(express.static("public"));
app.set("view engine", "ejs");

//===== ROUTES =====//
app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, process.env.IP, () => {
    console.log("Sever is running...");
});