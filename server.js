const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const qry=require("./knex/queries");
const cors=require('cors');

const a_obj_to_df=require("./aobj_to_df")
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());
let empty_obj={"tourney_name":[],"round":[],"surface":[],"tourney_date":[],"winner_name":[],"loser_name":[],"score":[],"nos":[],"comeback":[],"w_dr":[],"l_dr":[],"w_1st_In_prc":[],"w_1stprc":[],"w_2ndprc":[],"w1st_retprc":[],"w2nd_retprc":[],"w_bpFaced":[],"w_bpSavedprc":[],"w_bpSaved":[],"l_1st_In_prc":[],"l_1stprc":[],"l_2ndprc":[],"l1st_retprc":[],
"l2nd_retprc":[],"l_bpFaced":[],"l_bpSavedprc":[],"l_bpSaved":[],
"w_ace":[],"l_ace":[],"w_df":[],"l_df":[]}

app.use(cors());
app.get("/test",(req,res)=>{
    res.status(200).json({success:true});
});
app.get("/fetch",async (req,res)=>{
    const result= await qry.GetData(req.query);
    let res_df=a_obj_to_df(result);
    res_df=(Object.keys(res_df).length===0)?empty_obj:res_df;
    res.status(200).json(res_df);
 } );

app.listen(3006,()=>console.log("The server is running on port 3006"));