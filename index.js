const express = require('express');
const port = 8080;
const app = express();

const db = require('./config/mongoose');
const adminTable = require('./model/admin');


app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.post('/insertdata', (req, res) => {
    const { bookname, price, pages, authorname } = req.body;
    adminTable.create({
        bookname: bookname,
        price: price,
        pages: pages,
        authorname: authorname,
    }).then((success) => {
        return res.redirect('back')//same page ma refresh thy ne ave
    }).catch((err) => {
        console.log('error');
        return false;
    })
})

app.get('/', (req, res) => {
    adminTable.find({}).then((success) => {
        return res.render('index', {
            success
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get('/deletedata', (req, res) => {
    let id = req.query.id;
    adminTable.findByIdAndDelete(id).then((data) => {
        console.log('record deleted');
        return res.redirect('back');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})


app.get('/editData', (req, res) => {
    let id = req.query.id;
    adminTable.findById(id).then((data) => {
        return res.render('edit', {
            single: data
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})
app.post('/updateData', (req, res) => {
    let editid = req.body.editid;
    
    const { bookname, price, pages, authorname } = req.body;
    adminTable.findByIdAndUpdate(editid, {
        bookname: bookname,
        price: price,
        pages: pages,
        authorname: authorname
    }).then((success) => {
        console.log("Record successfully update");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log('port not start');
    }
    console.log('port not start');
})