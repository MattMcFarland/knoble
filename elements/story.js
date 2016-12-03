// Element: story
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function story ({title, body}, laneIndex, storyIndex, send) {
  return html`
    <li class="story">
      <header><h3>${title}</h3></header>
      <section class="body">
        ${body}
      </section>
      <footer>
        <button onclick=${e => send('removeStory', { laneIndex, storyIndex })}>Remove</button>
      </footer>
    </li>
  `
}

module.exports = story
