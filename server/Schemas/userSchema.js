const {Schema,model} = require('mongoose');

const userSchema = new Schema({userName: String, message: Array(String)});

module.exports = model('User', userSchema)
