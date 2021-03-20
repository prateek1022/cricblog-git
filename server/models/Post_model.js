var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

var Post_Schema = new mongoose.Schema({
    title: { type: String },
    desc: { type: String },
    post_text: { type: String },
    created: { type: Date, default: Date.now },
    photo_url: { type: String },
    comments: [{
        cmt_id: mongoose.Schema.Types.ObjectId,
        name: { type: String },
        cmt_txt: { type: String },
        created: { type: Date, default: Date.now }
    }],
    likes: { type: Number,default:0 }
}, { collection: 'posts' });

const post = mongoose.model('post', Post_Schema);

module.exports = { post: post }