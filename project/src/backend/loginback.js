const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.vlqctt0.mongodb.net/worker-client?retryWrites=true&w=majority")
.then(()=>{console.log("login vannu")})
.catch(err=>console.log(err));

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model("Login", newSchema);

module.exports = Login;
