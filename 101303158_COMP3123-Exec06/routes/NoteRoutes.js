const express = require("express")
const mongoose = require("mongoose")
const noteModel = require('../models/NotesModel');
const routes = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    try{
        const newNote = new noteModel(req.body)
        if(!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        } else {
            const note = await newNote.save()
            res.status(200).send(note)
        }
        
    } catch (err) {
        res.status(400).send(err)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    try{
        const notes = await noteModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    try{
        const note = await noteModel.findById(req.params.noteId)
        if(!note) {
            return res.status(404).send({message: "Note not found with id " + req.params.noteId})         
        } else {
        res.status(200).send(note)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    try{
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(200).send(updatedNote)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    try{
        const deletedNote = await noteModel.findByIdAndRemove(req.params.noteId)
        if(!deletedNote) {
            res.status(404).send({message: "Note not found with id " + req.params.noteId})
        } else {
            res.status(200).send(deletedNote)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = routes