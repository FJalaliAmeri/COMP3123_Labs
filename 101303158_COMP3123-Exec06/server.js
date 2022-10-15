const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/NoteRoutes');
const mongoose = require('mongoose');
const app = express();

const DB_URL = "mongodb+srv://101303158:Farshad@cluster0.3ltryez.mongodb.net/101303158_COMP3123-Exec06?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(notesRoutes);
mongoose.Promise = global.Promise;


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.route("/")
    .get((req, res) => {
        res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
    })


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});