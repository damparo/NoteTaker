const uuid = require("uuid").v4;
const db = require("./db/db");

db.read().then(function(notes) {
    console.log(notes);
});

console.log(uuid());


readFile("db.json", "utf8").then(data => {
    const db = JSON.parse(data);
    data.push("hello");
    return writeFile("db.json", JSON.stringify(db))
}) .catch(err => console.log(err));
