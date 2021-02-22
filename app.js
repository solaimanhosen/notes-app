const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Description: ' + argv.description)
        notes.addNote(argv.title, argv.description)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log('Listing all the notes');
    }
})

yargs.parse();
