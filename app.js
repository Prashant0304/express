const express= require('express');

const app=express();


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
});


app.get('/about',(req,res)=>{
    res.sendFile(__dirname +'/about.html');
});

// app.get('/profile/:id',(req,res)=>{
//     res.send('Profile id is '+req.params.id);
// })

app.get('/profile/:name',(req,res)=>{
    res.send('Profile name is '+req.params.name);
})


app.listen(3000);