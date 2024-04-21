const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb+srv://labhsetwarnaman:NGqrP7r0v5jJDarT@cluster0.patyjcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
