
console.log('notes.js');

const fs = require('fs')

module.exports = {
    addNote(title, description) {
        let notes = this.getNotes();
        const duplicateNote = notes.find((note) => note.title === title)
        if (duplicateNote === undefined) {
            notes.push({
                title: title, 
                description: description
            })
            fs.writeFileSync('notes.json', JSON.stringify(notes))
            console.log('note saved successfully')
        } else {
            console.log('title already exists')
        }
    },
    removeNote(title) {
        let notes = this.getNotes()
        let filteredNotes = notes.filter((note) => note.title !== title)

        if (filteredNotes.length < notes.length) {
            fs.writeFileSync('notes.json', JSON.stringify(filteredNotes))
            console.log('title: ' + title + '\n' + 'this note is remvoed')
        } else {
            console.log('title not found')
        }
    },
    getNotes() {
        try {
            let dataBuffer = fs.readFileSync('notes.json')
            let dataJSON = dataBuffer.toString();
            let data = JSON.parse(dataJSON)
            return data;
        } catch(e) {
            return []
        }
    },
    readNote(title) {
        let notes = this.getNotes();
        let matchNote = notes.find((note) => note.title === title)

        if (matchNote !== undefined) {
            console.log('Title: ' + matchNote.title);
            console.log('Description: ' + matchNote.description)
        } else {
            console.log('no match found')
        }
    }
};
