import Post from "./post.js"

class ServicePost {
    async create(post) {
        return await Post.create(post);
    }
    async getOne(id) {
        return await Post.findById({ _id: id });
    }
    async getAll() {
        return await Post.find();
    }
    async update(post) {
        return await Post.findByIdAndUpdate(post._id, post, {new: true})
    }
    async delete(id) {
        return await Post.findByIdAndDelete(id);
    }
}


export default new ServicePost();