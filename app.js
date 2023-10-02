import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let newitems=[];
app.get('/',(req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day=today.toLocaleDateString("en-US", options);
    res.render("index.ejs",{
        nday:day,
        items:newitems,
    });
});

app.post("/",(req,res)=>{
    let newitem=req.body.newItem;
    newitems.push(newitem)
    res.redirect("/");
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});
