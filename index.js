
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/employ",(res,req)=>{

var ename=req.body.name ;   
var empno=parseInt(req.body.num);
var designation=req.body.desig;
var phno=parseInt(req.body.ph);
var salary=parseInt(req.body.sal);

res.status(200).json({"Name":ename,"empno":empno,"designation":designation,"Phonenumber":phno,"Salary":salary})


})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})