// Element: story
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function story ({title, body}, laneIndex, storyIndex, send) {
  function handleDragStart (e) {
    e.dataTransfer.setData('text/plain', JSON.stringify({ laneIndex, storyIndex }))
    e.dataTransfer.dropEffect = 'move'
    console.log(e)
  }
  return html`
    <li
      draggable="true"
      class="story"
      ondragstart=${handleDragStart}
      >
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
