const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Thamaraiselvan:"+process.env.MongoDB_PASS+"@cluster0-66r7n.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Sucessfully connected')
    } else {
        console.log("Error in Db Connection" + err)
    }
});
require('./register.model')
