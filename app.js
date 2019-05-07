require('./model/db')
//require section
const express=require('express');
// Import Body parser
let bodyParser = require('body-parser');
const dashboardController=require('./controller/dashboardController')

const app=express();
app.set('view engine','ejs')
app.use(express.static('public'));
var port = process.env.PORT || 3000;
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.get('/',(req,res)=>{
     res.render('home')
 })
app.listen(port)
app.use('/',dashboardController)