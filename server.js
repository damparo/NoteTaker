// app.get()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.get("/notes", function(req, res){
    res.sendFile(__dirname + "/public/notes.html");
});
// app.get("/assets/css/styles.css", function(req, res){
//     res.sendFile(__dirname + "/public/assets/css/styles.css");
// });
// app.get("/assets/js/index.js", function(req, res){
//     res.sendFile(__dirname + "/public/assets/js/index.js");
// });
app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))
