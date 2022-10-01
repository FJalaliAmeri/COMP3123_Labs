const express = require("express")

const SERVER_PORT = 8088

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Lab 4</h1><h2>Farshad Jalali Ameri - 101303158</h2>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))
})

app.post("/user/:firstname/:lastname", (req, res) =>{
    res.send(JSON.stringify(req.params))
})

app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})

//link for postman: https://www.getpostman.com/collections/048209d283015c0058e4