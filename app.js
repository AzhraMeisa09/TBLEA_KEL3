const express = require('express');
const app = express();
const port = 3000;

app.set('views', [
  path.join(__dirname, 'views/Mahasiswa'),
  path.join(__dirname, 'views/Dosen'),
  path.join(__dirname, 'views'),
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
