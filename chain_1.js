import express from "express";

function m1(req, res, next) {
        console.log("middleware 1");
        next();
}
function m2(req, res, next) {
        console.log("middleware 2");
        next();
}
function m3(req, res, next) {
        console.log("middleware 3");
        next();
}
const combined = [m1, m2];

const app = express();
app.get("/", combined, m3, (req, res) => res.send("Hello world!"));

const server = app.listen(0, async () => {
        const uri = `http://127.0.0.1:${server.address().port}/`;
        const r = await fetch(uri);
        console.log(await r.text());
        server.close();
});