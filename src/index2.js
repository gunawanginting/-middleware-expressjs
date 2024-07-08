import express from "express";

const app = express();
const router = express.Router();

router.use((req, res, next) => {
    console.log('router mildeware....');
    next();
});

router.get('/', (req, res) => {
    res.send("hello deck!");
});

app.use("/router", router);

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000");
});

