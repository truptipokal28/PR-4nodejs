const mongoose=require('mongoose');
const adminSchema=mongoose.Schema({
    bookname:{
        type: String,
        require:true
    },
    price:{
        type: String,
        require:true
    },
    pages:{
        type: String,
        require:true
    },
    authorname:{
        type: String,
        require:true
    }
}
)
const adminTable=mongoose.model('admintable',adminSchema);
module.exports=adminTable;