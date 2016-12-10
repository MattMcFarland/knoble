// Element: addLane
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function addLane (send) {
  return html`
    <section class="lane">
    <header><h2><button onclick=${e => send('addLane')} class="inherit-all">add new</button></h2></header>
      <ul>
        <li><button onclick=${e => send('addLane')} class="btn-add-lane">+</button></li>
      </ul>
    </section>
  `
}

module.exports = addLane
