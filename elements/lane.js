// Element: lane
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const story = require('./story')
const addStory = require('./add-story')
const removeLane = require('./remove-lane')

function lane ({title, stories}, laneIndex, send) {
  function onDragOver (e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }
  function onDragLeave (e) {
    e.preventDefault()
  }
  function onDrop (e, storyIndex) {
    e.preventDefault()
    send('moveStory', {
      from: JSON.parse(e.dataTransfer.getData('text')),
      to: {
        laneIndex,
        storyIndex
      }
    })
  }

  return html`
    <section class="lane">
      <header><h2>${title}</h2></header>
      <ul>
        ${stories.map((storyData, storyIndex) =>
          html`<li
            ondrop=${e => onDrop(e, storyIndex)}
            ondragover=${onDragOver}
            ondragleave=${onDragLeave}
            >
          ${story(storyData, laneIndex, storyIndex, send)}</li>`
        )}
        <li>${addStory(laneIndex, send)}</li>
        ${(stories.length === 0) ? html`<li>${removeLane(laneIndex, send)}</li>` : ''}
      </ul>
    </section>
  `
}

module.exports = lane
