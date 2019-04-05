const express = require("express");
const app = express();
const rp = require("request-promise");

//===== ROUTES =====//
app.get("/", (req, res) =>{
    res.send("wroking");
});

app.listen(process.env.PORT, process.env.IP, () =>{
    console.log("Sever is running...");
});