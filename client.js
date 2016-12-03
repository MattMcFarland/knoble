const choo = require('choo')
const sf = require('sheetify')

sf('normalize.css', { global: true })
sf('./assets/main.css', { global: true })

const app = choo()

app.model(require('./models/app'))

app.router((route) => [
  route('/', require('./pages/home'))
])

const tree = app.start()

document.body.appendChild(tree)
