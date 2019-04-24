//require section
const express=require('express');

const app=express();
app.set('view engine','ejs')
app.use(express.static('public'));
app.listen(4000)
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('register')
})