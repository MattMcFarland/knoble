// Element: addStory
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function addStory (index, send) {
  return html`
    <section class="add-story">
      <button onclick=${e => send('addStory', { index })} class="btn-add-story">+</button>
    </section>
  `
}

module.exports = addStory
