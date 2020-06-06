const sqlite3 = require ("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

/* db.serialize(() =>{

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT, 
            name TEXT,
            address TEXT, 
            address2 TEXT,
            state TEXT, 
            city TEXT, 
            options TEXT
        );
    `)

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
    "https://images.unsplash.com/photo-1558905566-ddbeb2fc2c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "Royal Ballet School",
    "46 Floral St., Convent Garden",
    "n. 0902",
    "UK",
    "London",
    "School"
];

function afterInsertData(err){
    if (err){
        return console.log(err);
    }

    console.log("Inserted with success");
    console.log(this);
};
    
db.run(query, values, afterInsertData); */

/* db.all(`SELECT * FROM places`, function (err, rows){
    if (err){
        return console.log(err);
    }

    console.log("Here is your data: ");
    console.log(rows);
}); 

db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    if (err){
        return console.log(err);
    }

    console.log("Data deleted!");
    
});*/

