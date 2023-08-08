const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/backend');
const db=mongoose.connection;
db.on('connected',(err)=>{
    if(err){
        console.log('db not start');
    }
    console.log('db strat');
})
module.exports=db;