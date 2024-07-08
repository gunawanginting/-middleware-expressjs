import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    throw new Error("page not found");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Gunakan console.error untuk log error
    res.status(500).send("page not found");
});

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000");
});
