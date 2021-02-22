
console.log('notes.js');

const fs = require('fs')

const getNotes = function () {
    try {
        let dataBuffer = fs.readFileSync('notes.json')
        let dataJSON = dataBuffer.toString();
        let data = JSON.parse(dataJSON)
        return data;
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: function (title, description) {
        let notes = getNotes();
        const duplicates = notes.filter(function(note) {
            return note.title === title
        })
        if (duplicates.length === 0) {
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
    removeNote: function (title) {
        let notes = getNotes()
        let filteredNotes = notes.filter(function (note) {
            return note.title !== title;
        })

        if (filteredNotes.length < notes.length) {
            fs.writeFileSync('notes.json', JSON.stringify(filteredNotes))
            console.log('title: ' + title + '\n' + 'this note is remvoed')
        } else {
            console.log('title not found')
        }
    }
};
