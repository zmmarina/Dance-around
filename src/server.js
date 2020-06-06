const express = require("express");
const server = express();

const db = require("./database/db");


const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.listen(3000);

server.use(express.static("public"));

server.use(express.urlencoded({extended: true}));


server.get("/", (req, res)=> {
    return res.render("index.html");
});


server.get("/create-point", (req, res)=> {

    return res.render("create-point.html");
});


server.post("/savepoint", (req, res)=> {

    const query = `
    INSERT INTO places (
        image, 
        name, 
        address, 
        address2, 
        state, 
        city, 
        options
    ) VALUES (?,?,?,?,?,?,?);
`;
    
const values =[
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.options
    
];

function afterInsertData(err){
    if (err){
       console.log(err);
       return res.send("Something went wrong")
    }

    console.log("Inserted with success");
    console.log(this);

    return res.render("create-point.html", {saved : true});
};
    
db.run(query, values, afterInsertData);

})


server.get("/search-results", (req, res)=> {

    const search = req.query.search;

    if (search == ""){
        return res.render("search-results.html", { total : 0 });
    }
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows){
        if (err){
            return console.log(err);
        }
            const total = rows.length;

            return res.render("search-results.html", {places:rows, total: total});
    });
    
});