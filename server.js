const express = require('express');
const app = express();

const { MongoClient, ObjectId } = require('mongodb');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let db;
let id = 'cyj15945';
let pwd = 'qwer123';
const url = `mongodb+srv://${id}:${pwd}@cluster0.lqyccjp.mongodb.net/`;
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('yunsBoard');
  app.listen(8080, ()=>{
    console.log('http://localhost:8080 에서 서버 실행중');
  })
}).catch((err)=>{
  console.log(err)
})

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// 메인페이지
app.get('/',  async (req, res)=>{
  let result = await db.collection('post').find().toArray();
  res.render('index.ejs', {result: result});
})

// 글 작성 페이지
app.get('/write', async (req, res) => {
  let result = await db.collection('user').find().toArray();
  console.log(result);
  res.render('write.ejs', {result : result});
})
app.post('/write', async (req, res) => {
  let data = req.body;
  db.collection('post').insertOne({title: data.title, content: data.content, date: data.date, writer: data.writer, img: data.img});
  res.redirect('/');
})

// 게시글 보기
app.get('/post/:id', async (req, res) => {
  let id = req.params.id;
  let result = await db.collection('post').findOne({_id: new ObjectId(id)});
  res.render('post', {result:result});
})