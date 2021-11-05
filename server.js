const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const qry=require("./knex/queries");
const cors=require('cors');

const a_obj_to_df=require("./aobj_to_df")
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());

app.use(cors());
app.get("/test",(req,res)=>{
    res.status(200).json({success:true});
});
app.get("/fetch",async (req,res)=>{
    const result= await qry.GetData(req.query);
    const res_df=a_obj_to_df(result);
    res.status(200).json(res_df);
 } );

app.listen(3006,()=>console.log("The server is running on port 3006"));