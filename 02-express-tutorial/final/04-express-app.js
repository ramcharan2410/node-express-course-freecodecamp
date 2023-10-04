const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware (this code should be placed at the top of all routes)
app.use(express.static('./public'))
// static file = file that server doesn't have to change, like our javascript, css, image, etc

// but this index.html file is also a static file, hence we can also add it to static assets in public folder (This is done in the next section)
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
