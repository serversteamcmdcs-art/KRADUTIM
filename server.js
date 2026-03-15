const express = require('express')
const app = express()

// Укажем директорию в которой будут лежать наши файлы
app.use(express.static('public'))

// Отправляем index.html, когда пользователи получают доступ к
// корневому каталог с использованием res.sendFile()
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(5000)