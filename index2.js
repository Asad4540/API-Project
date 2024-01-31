//This code is without mongoDb database

const express = require("express");
const mongoose = require("mongoose");
const Bodyparser = require("body-parser");


//Database
const database = require("./database/database");

//Models
const BookModel = require("./database/book");
const AuthorModel = require("./database/author");
const PublicationModel = require("./database/publication");
const bookmodel = require("./database/book");
const Publicationmodel = require("./database/publication");

//Establishes database connection
mongoose.connect("mongodb+srv://asadchaudhry02:Asad4540@mymongo.ov9hazg.mongodb.net/Booky")
.then(() => console.log("Connection Established"));

//Initialize
const booky = express();
booky.use(Bodyparser.urlencoded({ extended: true }));
booky.use(Bodyparser.json());
/*
Route - /
Description - Get all books
Access - public
Parameter - None
Methods - get
*/

booky.get("/books", async (req, res) => {
    const getallbooks = await bookmodel.find();
    return res.json(getallbooks);
});


/*
Route - /is
Description - Get specific book
Access - public
Parameter - isbn
Methods - get
*/

booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No results for ${req.params.isbn}` })
    }
    return res.json({ book: getSpecificBook });
});


/*
Route - /c
Description - Get book according to category
Access - public
Parameter - category
Methods - get,include
*/

booky.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book for the category of ${req.params.category}` })
    }
    return res.json({ book: getSpecificBook })
});


/*
Route - /lang
Description - Get book according to language
Access - public
Parameter - language
Methods - get,include
*/

booky.get("/lang/:language", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language.includes(req.params.language)
    )
    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for ${req.params.language} language` })
    }
    return res.json({ books: getSpecificBook })
});

//Author object array

/*
Route - /auth
Description - to get all authors
Access - public
Parameter - none
Methods - get
*/

booky.get("/auth", (req, res) => {
    return res.json({ Author: database.authors })
})


/*
Route - /auth
Description - to get specific author
Access - public
Parameter - authors
Methods - get
*/

booky.get("/auth/:name", (req, res) => {
    const getSpecificBook = database.authors.filter(
        (author) => author.Name === req.params.name
    );
    if (getSpecificBook.length === 0) {
        return res.json({ error: `No Author with name ${req.params.name} found` })
    }
    return res.json({ books: getSpecificBook })
});

/*
Route - /book/auth
Description - to get a list of authors based on books
Access - public
Parameter - isbn
Methods - get
*/

booky.get("/book/auth/:isbn", (req, res) => {
    const getSpecificAuthor = database.authors.filter(
        (author) => author.books.includes(req.params.isbn)
    );
    if (getSpecificAuthor.lenght === 0) {
        return res.json({ error: `No author with ${isbn} found` })
    }
    return res.json({ authors: getSpecificAuthor })
});

//Publications

/*
Route - /publication
Description - to get all publications
Access - public
Parameter - none
Methods - get
*/

booky.get("/pub",async (req, res) => {
    getallpublications = await Publicationmodel.find();
    return res.json(getallpublications);
});

/*
Route - /publication
Description - to get all publications
Access - public
Parameter - none
Methods - get
*/

booky.get("/pub/:id", (req, res) => {
    const getSpecificPublication = database.publication.filter(
        (ids) => ids.Id === req.params.id
    )
    if (getSpecificPublication.length === 0) {
        return res.json({ error: `No publication with ${req.params.id} found` })
    }
    return res.json({ ids: getSpecificPublication })
});


/*
Route - /book/pub
Description - to get a list of publications based on book
Access - public
Parameter - isbn
Methods - get
*/



booky.get("/book/pub/:isbn", (req, res) => {
    const getSpecificPublication = database.publication.filter(
        (publications) => publications.books.includes(req.params.isbn)
    );
    if (getSpecificPublication.length === 0) {
        return res.json({ error: `No author with ${isbn} found` })
    }
    return res.json({ authors: getSpecificPublication })
});


//Post request starts

/*
Route - /authors/new
Description - to add a new author
Access - public
Parameter -          
Methods - post
*/

booky.post("/auth/new", (req, res) => {
    newAuthor = req.body;
    database.authors.push(newAuthor);
    return res.json(newAuthor);
});

/*
Route - /books/new
Description - to add a new book
Access - public
Parameter -    
Methods - post
*/

booky.post("/books/new", (req, res) => {
    Newbook = req.body;
    database.books.push(Newbook);
    return res.json(Newbook);
});

/*
Route - /pub/new
Description - to add a new publication
Access - public
Parameter -    
Methods - post
*/


booky.post("/pub/new", (req, res) => {
    newPub = req.body;
    database.publication.push(newPub);
    return res.json(newPub);
})

///Put Request Starts//


/*
Route - /books/new
Description - to add a new book
Access - public
Parameter -    
Methods - post
*/

booky.put("/pub/update/book/:isbn", (req, res) => {
    //Update the publication database
    database.publication.forEach((pub) => {
        if (pub.id === req.body.pubId) {
            return pub.books.push(req.params.isbn);
        }
    });

    //update the book database
    database.books.forEach((book) => {
        if (book.ISBN === req.params.isbn) {
            book.publications = req.body.pubId;
            return;
        }
    });
    return res.json(
        {
            books: database.books,
            publications: database.publication,
            message: "Succesfully updated publications"
        }
    );
});


booky.listen(3000, () => {
    console.log("Server is up and running");
});


