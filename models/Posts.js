var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
    {
        title: String,
        link: String,
        upvotes: {
            type: number,
            default: 0
        },
        comment: [{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    }
);

mongoose.model('Post', PostSchema);