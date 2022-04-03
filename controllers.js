import ServicePost from './service.js'

class PostController {

    async create(req, res) {
        try {
            const post = await ServicePost.create(req.body);
            console.log("/post post", post);
            return res.status(200).json(post);
        } catch (e) {
            console.log(e);
        }
    }

    async getAll(req, res) {
        try {
            const users = await ServicePost.getAll();
            console.log("posts get loaded");
            return res.status(200).json(users);
        } catch (e) {
            console.log(e);
        }
    }

    async getOne(req, res) {
        try {
            const userById = await ServicePost.getOne(req.params.id);
            return res.status(200).json(userById);
        } catch (e) {
            console.log(e);
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await ServicePost.update(req.body);
            return res.status(200).json(updatedPost)
        } catch (e) {
            console.log(e);
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await ServicePost.delete(req.params.id);
            return res.json(deletedPost)
        } catch (e) {
            console.log(e);
        }
    }


}

export default new PostController();