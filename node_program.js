console.log("This is 1st Program");



 ***************** map , for , and foreach method *******************


const arr = [4,5,7,8,4,2,6];

const res = arr.filter((item)=>{
    return item>4;
})

console.warn(res);

const res = arr.map((item)=>{
    return item>4;
})

console.warn(res);


arr.forEach((item)=>{
    console.log(item>4);
})


for (const key in arr) {
    console.warn(key>4);
}






******************** Promish ****************************************


let a = 20;
let b = 30;

console.log(a);
console.log(b)

setTimeout(()=>{
    b = 100;
},2000)

console.log(a+b);


let promish = new Promise((resolve,reject)=>{
    resolve(b = 100);
})

promish.then((b)=>{
    setTimeout(()=>{
        console.log(a+b);
    },2000)
})





 ******************** Get Input From Console ****************


const fs = require('fs');

const inp = process.argv
console.log(inp);


const inp = process.argv
fs.writeFileSync(inp[2],inp[3]);



const inp = process.argv
if(inp[2]=="add"){
    fs.writeFileSync(inp[3],inp[4]);
    console.warn("File Created");
}else if(inp[2]=="read"){
    const data = fs.readFileSync(inp[3],"utf-8");
    console.warn(data);
}else if(inp[2]=="del"){
    fs.unlinkSync(inp[3]);
    console.warn("File Deleted");
}else{
    console.warn("Invalid Entry");
}








**********************************************************************


var a = 10;
var b = 20;
var sum = a+b;
console.log(sum);

*****************************************************************************************************************


Create File

const fs = require("fs");

fs.writeFileSync("file1.txt","This is First File");

fs.appendFileSync("file1.txt"," This is Append Code");

const buf_data = fs.readFileSync("file1.txt");

console.log(buf_data);

const my_data = buf_data.toString();

console.log(my_data);


fs.renameSync("file1.txt","read_write_file.txt");


*****************************************************************************************************************


CRUD Operation

const fs = require("fs");

fs.mkdirSync('crud');

fs.writeFileSync("crud/file.txt","This is CRUD operation");

fs.appendFileSync("crud/file.txt"," This is Append Text");

const data = fs.readFileSync("crud/file.txt","utf-8");
console.log(data);


fs.renameSync("crud/file.txt","crud/crudfile.txt");

fs.unlinkSync('crud/crudfile.txt');










*******************************Create Module *************************


const add = (a,b)=>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

module.exports = {add,sub};



=***********************Use Module **********************



const {add,sub} = require("./myfun");

console.log(add(5,5));
console.log(sub(10,5));



**************** OS Module *****************



const os = require("os");

// console.log(os.arch());


// const freemem = os.freemem();
// console.log(`${freemem/1024/1024/1024}`);


// const total_mem = os.totalmem();
// console.log(`${total_mem/1024/1024/1024}`);

// console.log(os.platform());


// console.log(os.hostname());

// console.log(os.release());

// console.log(os.type());




 ******************* Async JS *********************

const fs = require("fs");

fs.mkdir("crud",(err)=>{
    console.log(err);
});

fs.writeFile('crud/file.txt',"This is Async File",(err)=>{
    console.log(err);
})

fs.appendFile("crud/file.txt"," This is Append Async",(err)=>{
    console.log(err);
})


fs.readFile("crud/file.txt","utf-8",(err,data)=>{
    console.log(data);
})


fs.rename("crud/file.txt","crud/crud.txt",(err)=>{
    console.log(err);
})


fs.unlink("crud/crud.txt",(err)=>{
    console.log(err);
})



************** Synv vs Asynv JS ************************



const fs = require("fs");

******************* Async **************

const data = fs.readFileSync("file.txt","utf-8");
console.log(data);
console.log("End Code");


********************* Sync *************

fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
})

console.log("End Code @!!!")





 ******************* path Module ********************

const fs = require('fs');
const path = require('path');

// console.log(path.join(__dirname+'/myfiles'));

const dirPath = path.join(__dirname,'myfiles');


// for(i=0;i<=5;i++){
//     fs.writeFileSync(`${dirPath}/text${i}.txt`,"This is Path File");
// }

fs.readdir(dirPath,(err,data)=>{
    data.forEach((item)=>{
        console.log(item);
    })
})





********************** HTTP module **********************


const http = require('http');
const url = require('url');

http.createServer((req,resp)=>{
    resp.write("This is HTTP Module.")
    resp.end()
}).listen(3000);



http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>THis is Response</h1>")
    res.end();
}).listen(3000);



http.createServer((req,res)=>{
    var data = req.url
    console.warn(data);
    res.end()
}).listen(3000);


 ***************** Create Server ************************


const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("<h1>This is Response</h1>");
});

server.listen(8000,"localhost",()=>{
    console.log('Listing');
})


const server = http.createServer((req,res)=>{
    res.end("<h1>This is Response</h1>");
});

server.listen(8000,"localhost")




http.createServer((req,res)=>{
    if(req.url =='/home'){
        res.end("This is Home");
    }else if(req.url == '/about'){
        res.end("This is About Page");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Error..!!</h1>");
    }
}).listen(3000,"localhost");









****************EXPRESS JS ******************



const express = require('express');
const path = require('path');

const app = express();



app.get("",(req,res)=>{
    res.send("<h1>This is HOME PAGE</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is About PAGE</h1>")
})

app.listen(3000);



**************************Get Data From Web Browser  ****************



app.get("",(req,res)=>{
    console.log(req.query);
    res.send(`<h1>Hello My Name Is : ${req.query.name} </h1>`);
}).listen(3000);





******************** Static WEB PAGE *********************


const dirpath = path.join(__dirname,'pages');

app.use(express.static(dirpath));

app.listen(3000);




*********************** SEND FILE as WEB PAGE ******************



const dirpath = path.join(__dirname,'pages');

app.get("",(_,res)=>{
    res.sendFile(`${dirpath}/home.html`);
})

app.get("/about",(_,res)=>{
    res.sendFile(`${dirpath}/about.html`);
})

app.get("*",(_,res)=>{
    res.sendFile(`${dirpath}/error.html`);
})

app.listen(3000);





********************** ejs Template Engine ***************************


app.set('view engine','ejs');

app.get("/profile",(_,res)=>{
    const user = {
        name:"Avneesh",
        email:"avnishled97@gmail.com",
        skill :['python','Django','React','Node','HTML','CSS']
    }
    res.render("profile",{user});
}).listen(5000);







**************** MiddleWares *********************************

const queryFilter = ((req,res,next)=>{
    const age = req.query.age;
    if(!age){
        res.send("Enter Age");
        next()
    } else if(age<18){
        res.send("Age Should be greater then 18");
    }else if(age > 100){
        res.send("Enter Valid Age");
    }
    else{
        next()
    }
    
})

app.use(queryFilter);


app.get("",(req,res)=>{
    res.send("<h1>This is Home Page</>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page</>")
})

app.listen(5000);





**************************** Single Route Middleware **************************************



const queryFilter = ((req,res,next)=>{
    const age = req.query.age;
    if(!age){
        res.send("Enter Age");
        next()
    } else if(age<18){
        res.send("Age Should be greater then 18");
    }else if(age > 100){
        res.send("Enter Valid Age");
    }
    else{
        next()
    }
    
})



app.get("",queryFilter,(req,res)=>{
    res.send("<h1>This is Home Page</>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page</>")
})

app.listen(5000);





*************** Middlleware for group of Routes **********************

const route = express.Router()
const queryFilter = require("./middleware");

route.use(queryFilter);

app.use('/',route);


app.get("",(req,res)=>{
    res.send("This is Home PAge");
})

route.get("/about",(req,res)=>{
    res.send("This is About Page");
})

route.get("/contact",(req,res)=>{
    res.send("This is Contact Page");
})


app.listen(5000);




********************** Mongo DB **********************************




const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const getData = async () =>{
    
    const conn = await client.connect();
    const db = conn.db('mydatabase');
    const collection = db.collection('Emp');
    const data = await collection.find({}).toArray();
    console.log(data);
}

getData()





*********** Import DB code  using Promish*******************************


const dbConnect = require('./dbConnect');

dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})



 *************** Using async await **************


const dbConnect = require('./dbConnect');
const getData = async () =>{
    const resp = await dbConnect();
    const data = await resp.find({}).toArray()
    console.warn(data);
}

getData()




***************** Insert DATA ************************************


const getConnect = require("./dbConnect");

const insertData = async () =>{
    
    const db = await getConnect();
    const data = [
        {
            name:"Avneesh Kumar Verma",
            age:24
        },
        {
            name:"Mini",
            age:28
        }
    ]
    // const res = await db.insertOne({name:"AV"});
    const res = await db.insertMany(data);
    if(res.acknowledged){
        console.warn("Data Inserted Succesfully");
    }
}


insertData()



******************** Update Data ************************


const dbConnect = require("./dbConnect");

const updateData = async () =>{

    const db = await dbConnect();

    // *************** Update One*******************
    // const res = await db.updateOne({name:"Avneesh Kumar Verma"},{$set:{name:"Av"}});

    // ******************** Update Many*********

    const res = await db.updateMany({name:"Av"},{$set:{name:"Avneesh Kumar Verma"}});
    if(res.acknowledged){
        console.log("Record Updated");
    }
}

updateData()



******************* Delete Record *******************


const dbConnect = require("./dbConnect");

const delRecond = async () =>{
    
    const db = await dbConnect();

    // **************** Delete One ****************
    // const res = await db.deleteOne({name:"Avneesh Kumar Verma"})

    // ******************* Delete Many ************

    const res = db.deleteMany({name:"AV"});
    if(res.acknowledged){
        console.warn("Record Deleted");
    }
}

delRecond()