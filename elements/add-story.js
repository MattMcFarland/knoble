// Element: addStory
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const dragEvents = require('../lib/dragEvents')

function addStory (index, send) {
  let { getTargetArea, handleDrag, handleDragEnter, handleDragLeave, handleDragOver, handleDragEnd } = dragEvents(send)

  function handleDrop (e) {
    let targetArea = getTargetArea()
    targetArea.classList.remove('over')
    e.preventDefault()
    send('moveStory', {
      from: JSON.parse(e.dataTransfer.getData('text')),
      to: { laneIndex: index, storyIndex: 0 }
    })
  }

  return html`
    <section class="add-story"
      ondrag=${handleDrag}
      ondragenter=${handleDragEnter}
      ondragleave=${handleDragLeave}
      ondragover=${handleDragOver}
      ondrop=${handleDrop}
      ondragend=${handleDragEnd}>
      <button onclick=${e => send('addStory', { index })} class="btn-add-story">+</button>
    </section>
  `
}

module.exports = addStory
