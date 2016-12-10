// Element: story
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function story ({title, body}, laneIndex, storyIndex, send) {
  function handleDragStart (e) {
    e.dataTransfer.setData('text/plain', JSON.stringify({ laneIndex, storyIndex }))
    e.dataTransfer.dropEffect = 'move'
    this.classList.add('dragstart')
  }
  function handleDragEnd (e) {
    e.preventDefault()
    this.classList.remove('dragstart')
  }
  return html`
    <div>
      <section
        ondragstart=${handleDragStart}
        ondragend=${handleDragEnd}
        draggable="true"
        class="story"
      >
      <header><h3>${title}</h3></header>
      <section class="body">
        ${body}
      </section>
      <footer>
        <button onclick=${e => send('removeStory', { laneIndex, storyIndex })}>Remove</button>
      </footer>
      </section>
    </div>
  `
}

module.exports = story
