import express from 'express';

const app = express();

// Middleware untuk mencetak log
app.use((req, res, next) => {
  console.log('contoh log ....');
  next();
})

// Middleware untuk menambahkan waktu permintaan
app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
})

app.get('/', (req, res) => {
  let responseText = "hello deck! <br>";
  responseText += `waktu permintaan : ${req.requestTime}`;
  res.send(responseText);
})

app.listen(3000, () => {
  console.log("server berjalan di http://localhost:3000");
})
