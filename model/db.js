const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Thamaraiselvan:Thamarai@123@cluster0-66r7n.mongodb.net/dashboard", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Sucessfully connected')
    } else {
        console.log("Error in Db Connection" + err)
    }
});
require('./register.model')