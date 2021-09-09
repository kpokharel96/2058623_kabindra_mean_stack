// load the module 
let mongoose = require("mongoose");

let fs = require("fs");
//url 
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);           // to avoid lower case collection creation and adding s.

// connect the database it return promise object 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

//to use this db connection we have to call function 
let db = mongoose.connection;

let records;
db.once("open",()=> {
    // We have to defined schema which provide the structure for collection 
    let callSchema = mongoose.Schema({
        _id:Number,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });

    let callModel = mongoose.model("Call",callSchema);
    records = JSON.parse(fs.readFileSync("call_data.json").toString());
    
    callModel.insertMany(records,(err,result)=> {
        if(!err){
            console.log(result)
        } else {
            console.log(err);
        }
        mongoose.disconnect();  
})
})