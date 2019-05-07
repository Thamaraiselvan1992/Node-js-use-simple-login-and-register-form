const mongoose = require('mongoose');
var registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    repass: {
        type: String
    }
})
mongoose.model("registers",registerSchema)
