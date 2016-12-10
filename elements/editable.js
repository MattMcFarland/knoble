const html = require('bel')

var lastEditKey = ''

module.exports = (state, send) => (textData) => {
  function setFocusIfJustStartedEditing (editKey) {
    if (lastEditKey === editKey) return
    setTimeout(() => {
      const inputEl = document.getElementById(editKey)
      if (inputEl) {
        inputEl.focus()
      }
      lastEditKey = editKey
    }, 0)
  }

  const text = textData.text
  const { laneIndex, storyIndex, key } = textData
  const editKey = textData.type === 'story' ? `STORY@${laneIndex},${storyIndex},${key}` : `LANE@${laneIndex},${key}`

  if (state.editKey === editKey) {
    setFocusIfJustStartedEditing(editKey)
    return html`
      <textarea
        id=${editKey}
        type="text"
        class="inherit-all"
        onfocus=${function () { this.value = this.value }}
        onblur=${e => send('setEditKey', null)}
        onchange=${e => send('updateText', { editKey, value: e.target.value })}>${text}</textarea>
    `
  } else {
    return html`
      <button type="button" class="inherit-all" onclick=${e => send('setEditKey', editKey)}>${text}</button>
    `
  }
}
