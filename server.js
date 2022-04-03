import express from "express";
import mongoose from "mongoose";
import oneRouter from './router.js';

const PORT = 5000;
const DB_URL = "mongodb+srv://admin:admin@cluster0.b36dn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express();

app.use(express.json());
app.use('/api', oneRouter);

app.get("/", (req, res) => {
    res.send("loaded");
})


async function start() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log(`serever started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();