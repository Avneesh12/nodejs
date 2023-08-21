// ************* API Using Mongo DB **********************

const express = require("express");
const dbConnect = require("./dbConnect");
const mongoDb = require("mongodb");

const app = express();
app.use(express.json());

//  ********************* get Data ********************

app.get("", async (req, res) => {
  const resp = await dbConnect();
  const data = await resp.find({}).toArray();
  res.send(data);
});


// ***************************post Data ************************

app.post("", async (req, res) => {
  const db = await dbConnect();
  const data = req.body;
  const result = await db.insertOne(data);
  res.send(result);
});

// ********************  Put Data *************************************

app.put("/:name", async (req, res) => {
  const db = await dbConnect();
  const data = req.body;
  app.use(express.json());
  const result = await db.updateOne({name:req.params.name}, { $set: data });
  res.send(result);
});



// ************************ delete Data*************************************

app.delete("/:id", async (req,res)=>{
    const db = await dbConnect();
    const data_id = new mongoDb.ObjectId(req.params.id);
    const result = await db.deleteOne({_id: data_id});
    res.send(result);
})





app.listen(5000);
