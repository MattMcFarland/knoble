// Element: removeLane
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function removeLane (index, send) {
  return html`<button onclick=${e => send('removeLane')} class="btn-remove-lane">-</button>`
}

module.exports = removeLane
