const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

app.use("/home", express.static("./statics/home.html"));


/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req,res) => {
  fs.readFile('./user.json', 'utf-8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let user = JSON.parse(data);
    res.send(JSON.stringify(user));
  })
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and password is valid then send response as below 
*/
router.get('/login', (req,res) => {
  let username = req.body.username
  let password = req.body.password
  fs.readFile('./user.json', 'utf-8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let user = JSON.parse(data);
    if (username === user.username && password === user.password) {
      res.send(JSON.stringify({status: true, message: "User Is valid"}));
    } else if (typeof username  === 'undefined' || typeof password === 'undefined') {
        res.send(JSON.stringify({status: false, message: "Username or Password is missing"}));
    } else if (username !== user.username) {
      res.send(JSON.stringify({status: false, message: "User Name is invalid"}));
    } else if (password !== user.password) {
      res.send(JSON.stringify({status: false, message: "Password is invalid"}));
    }
  }) 
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  let username = req.body.username
  fs.readFile('./user.json', 'utf-8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    let user = JSON.parse(data);
    if (username === user.username) {
      res.send(`<b>${username} successfully logout.<b>`);
    } else if (typeof username  === 'undefined') {
        res.send(JSON.stringify({status: false, message: "Username is missing"}));
    } else if (username !== user.username) {
      res.send(JSON.stringify({status: false, message: "User Name is invalid"}));
    }
  }) 
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));