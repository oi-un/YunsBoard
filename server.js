const express = require('express');
const app = express();

app.listen(8080, ()=>{
  console.log('http://localhost:8080 에서 서버 실행중');
})

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index.ejs');
})