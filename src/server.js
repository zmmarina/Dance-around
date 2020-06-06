const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



server.listen(3000);

server.use(express.static("public"));

server.get("/", (req, res)=> {
    return res.render("index.html");
});

server.get("/create-point", (req, res)=> {
    return res.render("create-point.html");
});

server.get("/search-results", (req, res)=> {
    return res.render("search-results.html");
});