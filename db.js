const mongoose=require('mongoose')
const {MongoClient}=require("mongodb")

const url='mongodb+srv://dbUser:dbUser@cluster0.qx7xf.mongodb.net/tctennischartsdb?retryWrites=true&w=majority'
let client ;
const dbName="tctennischartsdb"
// const initializeDbConnection = async () => {

//     client=await mongoose.connect(url,
//         {useNewUrlParser: true,
//         useUnifiedTopology: true}
//         )
//         .then(console.log("Mongo connected")
        
//         )
//         .catch(err=>console.log(err))
// }

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