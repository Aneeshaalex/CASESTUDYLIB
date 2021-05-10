const express = require('express');
const addBookRoutes = express.Router();
const Bookdata = require('../model/Bookdata');
const books = require('./bookRoutes');
const bodyParser = require('body-parser'); 

function router(navv){
    // var fs = require("fs");
    // var FileReader = require('filereader')
    // var fileReader = new FileReader();
    addBookRoutes.use(bodyParser.urlencoded({ extended: false }));   
    addBookRoutes.use(bodyParser.json()); 

    addBookRoutes.get('/', function(req,res){
        res.render("addbook", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addBookRoutes.post('/', function(req,res){
        var item = { title : req.body.title,
             author : req.body.author, 
             genre : req.body.genre, 
             image : req.body.image
            }
            var book = Bookdata(item);
            book.save();
            res.redirect('/books');
        ///books.push(book);
    
    });

    // fileReader.onload = function(event){
    //     let imageUrl = fileReader.result;
    //     $("#preview").attr("src", `${imageUrl}`);
    // }
    // fileReader.readAsDataURL();
    

    return addBookRoutes
}

module.exports = router;