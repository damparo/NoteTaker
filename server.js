const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;
const db = require("./db");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../NoteTaker/public/notes.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/api/notes", async function(req, res){
    res.json(await db.getNotes());
});

app.post("/api/notes", async function(req, res){
    await db.addNote(req.body);
    res.send("added a new note");
});


app.delete("/api/notes/:id", async function(req, res){
    console.log("welcome");
    console.log("req.params", req.params)

    const { id } = req.params;
    await db.deleteNote(id);
    
    res.send("added a new note");
});


app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))


// app.get("/assets/css/styles.css", function(req, res){
//     res.sendFile(__dirname + "/public/assets/css/styles.css");
// });
// app.get("/assets/js/index.js", function(req, res){
//     res.sendFile(__dirname + "/public/assets/js/index.js");
// });

// * The application frontend has already been created, it's your job to build the backend and connect the two.
// * The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.


//   * GET `*` - Should return the `index.html` file
// app.get("*", function(req, res){
//     res.sendFile(__dirname + "/public/index.html");
// })
// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:
//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
