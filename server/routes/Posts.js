var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var {post}=require('../models/Post_model');

router.get('/', (request, response, next) => {

    console.log("fett");

    post.find({}).lean().exec(function(err,posts_array){
        if(err){
            response.json({ code: 400, status: 'error', message: 'db error' });
        }
        else if(posts_array.length<0){
            response.json({ code: 400, status: 'error', message: 'db error02' });
        }
        else{
            
            response.json({ code: 200, status: 'success', message: 'posts recieved',posts_array });
        }
    });
});

router.post('/getposts', (request, response, next) => {

console.log("done");

    post.findOne({_id:request.body.id}).lean().exec(function(err,post){
        if(err){
            response.json({ code: 400, status: 'error', message: 'db error' });
        }
        else if(post.length<0){
            response.json({ code: 400, status: 'error', message: 'db error02' });
        }
        else{
            response.json({ code: 200, status: 'success', message: 'posts recieved',post });
        }
    });
});

router.get('/save', (request, response, next) => {
    var post_obj={
        title:"yes this is title",
        desc:"description is this",
        post_text:"this is a long paragraph which will consist of something and all the bullshit that is garhered around here"
    }

    post.create(post_obj, function (err, post) {
        console.log(post);
        console.log(err);


    });

});



module.exports = router;