require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;




//HANDLEBARS
hbs.registerPartials(__dirname + '/views/partials', (err)=>{
    console.log(err);
})

//
app.set('view engine','hbs');

// MIDLEWARE - servir contenido estatico
app.use( express.static('public') );

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Gabriel Carrillo',
        titulo: 'Curso Node'
    });
});

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Gabriel Carrillo',
        titulo: 'Curso Node'
    });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Gabriel Carrillo',
        titulo: 'Curso Node'
    });
});



// app.get('/generic',function(req,res){
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements',function(req,res){
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*',function(req,res){
    res.sendFile(__dirname + '/public/404.html');
});






app.listen(port);