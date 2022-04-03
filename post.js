import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, require: true},
    content: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model("Post", postSchema);