const express = require('express');
const con = require('./config');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json())


app.get("/get" , (req, resp)=>{
    con.query("SELECT * from visitors " , (err , result)=>{
        if(err) {
            resp.send('err');
        }
        else{
            resp.send(result);
        }
    })
});


const upload = multer({
    storage : multer.diskStorage({
        destination:function(req , file , cb){
            cb(null , file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");

app.post("/upload" , (req , resp )=>{
    resp.send("file uploaded");
});


//Sign In API
app.get("/signin/get" , (req, resp) => {
    con.query("SELECT * FROM signin" , (err , result)=>{
        if(err){
            resp.send(err)
        }
        else{
            resp.send(result)
        }
    })
})


app.listen(8000);