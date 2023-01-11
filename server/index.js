const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.set('strictQuery', false)

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb()
      // fakeDb.initDb()
    }
  }
)

const app = express()

app.use('/api/v1/products', productRoutes)

if(process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist', 'my-app')
  app.use(express.static(appPath))
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
  console.log('I am runnning!')
})

//mongodb+srv://test:<password>@cluster0.yardk8o.mongodb.net/?retryWrites=true&w=majority
