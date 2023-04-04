const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

//Mongo connection

// console.log(process.env.DB)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB)
    .then(() => console.log("Connected DB"))
    .catch((err) => console.log(err))

//Schema
const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    bloodGroup: String,
    password: String,
    // confirmpassword: String
})


// model
const userModel = mongoose.model('user', userSchema)


//API
app.get("/", (req, res) => {
    res.send("Server is running")
})


app.post("/register", (req, res) => {
    // console.log(req.body)
    const { email } = req.body

    userModel.findOne({ email: email }, (err, result) => {
        // console.log(result)
        // console.log(err)
        if (result) {
            res.send({ message: "Email_id is already Registered", alert: false })
        }
        else {
            const data = userModel(req.body)
            const save = data.save()
            res.send({ message: "Registration Successful", alert: true })
        }
    })
})

app.post("/", (req, res) => {
    // console.log(req.body)
    const { email } = req.body
    userModel.findOne({ email: email }, (err, result) => {
        if (result) {
            // console.log(result)
            const dataSend = {
                _id:result._id,
                name: result.name,
                email: result.email,
                bloodGroup: result.bloodGroup,
                };
                // console.log(dataSend)
            res.send({ message: "Login Successful", alert: true, data : dataSend })
        }
        else{
            res.send({ message: "Email not Registered, Please complete registration", alert: false})
        }
    })
})

app.listen(PORT, () => {
    console.log("Started at port:" + PORT)
})
















// mongoose.connect("mongodb://localhost:27017/myPatientDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB Connected")
// })


// const patientSchema = new mongoose.Schema({
//     name: String,
//     email:  String,
//     bloodGroup: String,
//     password: String,
// })

// const Patient = new mongoose.model("User", patientSchema)


// // Routes
// app.post("/login", (req, res) => {
//     const {email, password} = req.body
//     Patient.findOne({email: email}, (err, patient) => {
//         if(patient){
//             if(password === patient.password){
//                 res.send({message: "Login Successfull", patient: patient})
//             }
//             else{
//                 res.send({message: "Password didn't match"})
//             }
//         }
//         else{
//             res.send("Patient not registered")
//         }
//     })

// })

// app.post("/register", (req, res) => {
//     const { name, email, bloodGroup, password} = req.body;

//     Patient.findOne({email: email}, (err, patient) => {
//         if(patient){
//             res.send({message: "Patient already registerd"});
//         }
//         else{
//             const patient = new Patient({
//                 name,
//                 email,
//                 bloodGroup,
//                 password
//             })
//             patient.save(err => {
//                 if(err){
//                     res.send(err)
//                 } else {
//                     res.send( {message: "Successfully Registered" } )
//                 }
//             })
//         }
//     })
// })


// app.listen(5000, () => {
//     console.log("Started at port 5000")
// })