const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const uuid = require("uuid").v4;

const db = {
  getNotes: async function() {
    const notes = await readFile("db.json", "utf8");
    return JSON.parse(notes);
  },

  addNote: async function(newNote) {
    const db = await this.getNotes();
    db.push({ ...newNote, id: uuid() });
    return writeFile("db.json", JSON.stringify(db));
  },

  deleteNote: async function(id) {
    const db = await this.getNotes();
    const newDB = [];
    // console.log(db);

    for(let i = 0; i < db.length; i++){
        if(db[i].id === id) return;
        newDB.push(db[i]);

        return writeFile("db.json", JSON.stringify(newDB));
    }
    // breakdown for loop
    // try using filer - go through notes and will remove from list note with matching id

    // return this.getNotes()
    //     .then(notes =>
    //         notes
    //               .filter(note => note.id !== id)
    //                         .then(filterednotes => this.writeFile("db.json", JSON.stringify(filterednotes)))
    // );
  }
};

module.exports = db;
