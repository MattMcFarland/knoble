// Element: dropzone
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const dragEvents = require('../lib/dragEvents')
function dropzone (laneIndex, storyIndex, send) {
  let { getTargetArea, handleDrag, handleDragEnter, handleDragLeave, handleDragOver, handleDragEnd } = dragEvents(send)
  function handleDrop (e) {
    let targetArea = getTargetArea()
    targetArea.classList.remove('over')
    e.preventDefault()
    send('moveStory', {
      from: JSON.parse(e.dataTransfer.getData('text')),
      to: {
        laneIndex,
        storyIndex
      }
    })
  }

  return html`<div
    class="dropzone"
    ondrag=${handleDrag}
    ondragenter=${handleDragEnter}
    ondragleave=${handleDragLeave}
    ondragover=${handleDragOver}
    ondrop=${handleDrop}
    ondragend=${handleDragEnd}>
  </div>`
}

module.exports = dropzone
