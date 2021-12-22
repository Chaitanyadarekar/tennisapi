const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const qry=require("./knex/queries");
const qry2=require("./knex/queries2");
const qry3=require("./knex/queries3");
const cors=require('cors');
require('dotenv').config();
const  routes  =require ('./routes');
const initializeDbConnection  =require('./db').initializeDbConnection;
const {ObjectID}=require('mongodb');
const  getDbConnection  =require ('./db').getDbConnection;
const jwt =require ('jsonwebtoken');

const a_obj_to_df=require("./aobj_to_df")
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());
let empty_obj={"tourney_name":[],"round":[],"surface":[],"tourney_date":[],"winner_name":[],"loser_name":[],"score":[],"nos":[],"comeback":[],"w_dr":[],"l_dr":[],"w_1st_In_prc":[],"w_1stprc":[],"w_2ndprc":[],"w1st_retprc":[],"w2nd_retprc":[],"w_bpFaced":[],"w_bpSavedprc":[],"w_bpSaved":[],"l_1st_In_prc":[],"l_1stprc":[],"l_2ndprc":[],"l1st_retprc":[],
"l2nd_retprc":[],"l_bpFaced":[],"l_bpSavedprc":[],"l_bpSaved":[],
"w_ace":[],"l_ace":[],"w_df":[],"l_df":[]}
app.use(express.json());
app.use(cors());

routes.forEach(route => {
   app[route.method](route.path, route.handler);
});

app.get("/fetch",async (req,res)=>{
   // const {headers}=req
   // console.log(headers);
   const {authorization}=req.headers;
   if(!authorization){
      return res.status(401).json({message:'No authoization header sent'})
   }
   const token=authorization.split(' ')[1];
   jwt.verify(
      token,

      process.env.JWT_SECRET,

      async (err,decoded)=>{
      if(err) return res.status(401).json({message:"Unable to verify token"})

      const { id,isVerified }=decoded;
      if (!isVerified) return res.status(403).json({ message: 'You need to verify your email before you can update your data'})

      const db=getDbConnection();
      const user=await db.collection('users').findOne({_id:ObjectID(id)},
      {projection:{email:1}});
      console.log(user)
      if(!user) return res.status(401).json({message:"Unable to verify token"}) 
   })



   
   
    const result= await qry.GetData(req.query);
    let res_df=a_obj_to_df(result);
    res_df=(Object.keys(res_df).length===0)?empty_obj:res_df;
    res.status(200).json(res_df);
 } );


 app.get("/fetch2",async (req,res)=>{

   const {authorization}=req.headers;
   if(!authorization){
      return res.status(401).json({message:'No authorization header sent'})
   }
   const token=authorization.split(' ')[1];
   jwt.verify(
      token,

      process.env.JWT_SECRET,

      async (err,decoded)=>{
      if(err) return res.status(401).json({message:"Unable to verify token"})

      const {id}=decoded;
      const db=getDbConnection();
      const user=await db.collection('users').findOne({_id:ObjectID(id)},
      {projection:{email:1}});
      console.log(user)
      if(!user) return res.status(401).json({message:"Unable to verify token"}) 
   })
    
    const result= await qry2.GetData2(req.query);
    let res_df=a_obj_to_df(result);
    res_df=(Object.keys(res_df).length===0)?empty_obj:res_df;
    res.status(200).json(res_df);
 } );

 app.get("/fetch3",async (req,res)=>{

   const {authorization}=req.headers;
   if(!authorization){
      return res.status(401).json({message:'No authorization header sent'})
   }
   const token=authorization.split(' ')[1];
   jwt.verify(
      token,

      process.env.JWT_SECRET,

      async (err,decoded)=>{
      if(err) return res.status(401).json({message:"Unable to verify token"})

      const {id}=decoded;
      const db=getDbConnection();
      const user=await db.collection('users').findOne({_id:ObjectID(id)},
      {projection:{email:1}});
      console.log(user)
      if(!user) return res.status(401).json({message:"Unable to verify token"}) 
   })

    const result= await qry3.GetData3(req.query);
    let res_df=(!result[0])?{}:result[0];
    res.status(200).json(res_df);
 } );


initializeDbConnection()
.then(() => {

   app.listen(3006,()=>console.log("The server is running on port 3006"));
   //   app.listen(PORT, () => {
   //       console.log(`Server is listening on port ${PORT}`);
   //   });
 });

