
// ******************* CRUD in Mongoose ********************************


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydatabase");

const stuSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String
});




const insertData = async () =>{
    const stuModel = mongoose.model("stus",stuSchema);
    const data = new stuModel({name:"Avneesh",age:24,address:"Haridwar"});
    const res = await data.save()
    console.log(res);

}

insertData()



const readData = async () =>{
    const stuModel = mongoose.model("stus",stuSchema);
    const data = await stuModel.find({})
    console.warn(data)
}

readData()



const updateData = async () =>{
    const stuModel = mongoose.model("stus",stuSchema);
    const data = await stuModel.updateOne({name:"Avneesh"},{$set:{name:"Avneesh Kumar"}})
    console.warn(data)
}

updateData()



const deleteData = async () =>{
    const stuModel = mongoose.model("stus",stuSchema);
    const res = await stuModel.deleteOne({name:"Avneesh Kumar"});
    console.warn(res);
}

deleteData()