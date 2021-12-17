const mongoose=require('mongoose')
const {MongoClient}=require("mongodb")

const url=process.env.MONGODB_STRING
let client ;
const dbName=process.env.MONGODBDB


const initializeDbConnection=async()=>{
    try{
        client= new MongoClient(url);
        await client.connect();
        console.log("Connected to Mongo")
    }
    catch(err){
        console.log(err)
    }
}
 const getDbConnection=()=>client.db(dbName)
    



module.exports={initializeDbConnection,getDbConnection}