var express = require('express');
var app = express();

const PORT = 3000;

app.get("/", function (req, res, next) {
    //middleware 1
    req.middlewares = ["middleware1"];
    next()
},
    function (req, res, next) {
        //middleware 2
        req.middlewares.push("middleware2")
        next()
    },
    function (req, res, next) {
        //middleware 3
        req.middlewares.push("middleware3")
        res.json(req.middlewares);
    })

app.listen(PORT, () => {
    console.log("app running on port " + PORT)
})