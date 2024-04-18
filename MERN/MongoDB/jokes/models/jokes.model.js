const mongoose =require('mongoose');

const JokeSchema = new mongoose.Schema({

    jokeText:{
        type: String,
        required:true,
    },
    jokeRate: {
        type: Number,
        required:true,
    },


});

module.exports=mongoose.model('Jokes',JokeSchema);