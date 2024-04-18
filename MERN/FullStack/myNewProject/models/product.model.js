const mongoose = require('mongoose')

const productSchema ={

    productTitle:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    }
}