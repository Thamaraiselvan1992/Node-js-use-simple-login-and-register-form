const mongoose = require('mongoose');
mongoose.connect("//mongodb url", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Sucessfully connected')
    } else {
        console.log("Error in Db Connection" + err)
    }
});
require('./register.model')
