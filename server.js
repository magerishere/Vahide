import express, { response } from 'express';
import path from 'path';
import fs from 'fs';

// call express and store in app
const app = express();
// define path express to our directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));
// convert all data to json
app.use(express.json());
// get data from db.json file
const db = fs.readFileSync('./db.json');
// json parse data for read\write
const data = JSON.parse(db)

// register route
app.post('/register', (req, res) => {
    // generate random id
    req.body.id = Math.floor((Math.random() + 1) * 100)
    // push new user , to our users
    data.users = [
        ...data.users,
        req.body,
    ]
    // convert to json for append to db.json
    const jsonData = JSON.stringify(data);
    // read\write db.json, after append new data
    fs.writeFile("./db.json", jsonData, (err) => {
        // if occurred any error
        if (err) throw err;
        // success read\write
        res.send("Saved File");       

    });
});

// login route
app.post('/login', (req, res) => {
    //get userName input value
    const userName = req.body.userName;
    //get password input value
    const password = req.body.password;
    //get matched user
    const user = data.users.find((user) => user.userName === userName)
    // if authentication success
    if (user && user.password === password) {
        res.send(JSON.stringify(user.id));
    } else {
        //if authentication fail
        // 403 means unauthorized
        res.sendStatus(403);
    }
});

// logout route
app.post('/logout', (req, res) => {
    res.sendStatus(200);
});

// product creat route
app.post('/product/create', (req, res) => {
    // generate random id
    req.body.id = Math.floor((Math.random() + 1) * 100);
    // push new data in our data
    data.products = [
        ...data.products, req.body,
    ];
    // convert to json for append to db.json
    const jsonData = JSON.stringify(data);
    // read/write db.json
    fs.writeFile('./db.json', jsonData, (err) => {
        // if occurred any error
        if (err) throw err;
        // send successful response
        res.sendStatus(200);
    })
});

app.post('/user/products', (req, res) => {
    const userId = req.body.userId;
    const userProducts = data.products.filter((product) => product.userId === userId);
    res.send(userProducts);

})

// server run on port 4000 => localhost:4000
app.listen(4000);
