//initialize
const express = require ('express');
const app = express();

//to use the img, css and javascript inside the public directory
app.use(express.static('public'));

//use handlebars to handle html and where to look for the views 
const hdbrs = require('express-handlebars');
app.engine('handlebars', hdbrs(
    {   extname: 'handlebars', 
        defaultView: 'main',
        layoutsDir: __dirname + '/views/layouts/', 
        partialsDir: __dirname + '/views/partials/'
    }
));
app.set('view engine', 'handlebars');

//home page
app.get('/' , (req, res) =>{
    res.render('home');
});

//about
app.get('/about' , (req, res) =>{
    res.render('about');
});

//my Creations
app.get('/myCreations' , (req, res) =>{
    res.render('myCReations');
});

//blog
app.get('/blog' , (req, res) =>{
    res.render('blog');
});

//broken links
app.get('/' , (req, res) =>{
    res.send('It`s alive!.....but you have the wrong link....:(');
})

//connecting the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`We are alive at port ${PORT}`);
});