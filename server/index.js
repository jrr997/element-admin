const express = require('express')


const app = new express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/element-admin', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})

const Article = mongoose.model('article', new mongoose.Schema({
  name: { type: String },
  body: { type: String },
}))

app.get('/', async(req, res) => {
  res.send('index')
})

// 创建文章
app.post('/api/articles', async(req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})

// 获取所有文章
app.get('/api/articles', async(req, res) => {
  const article = await Article.find()
  res.send(article)
})

// 删除文章
app.delete('/api/articles/:id', async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
      status: true
    })
  })
  // 获取单篇文章
app.get('/api/articles/:id', async(req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})

app.put('/api/articles/:id', async(req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.query)
  res.send(article)
})

app.listen(3001, () => {
  console.log('http://locolhost:3001')
})