module.exports = function setup (send) {
  let targetArea
  function handleDrag (e) {
    e.preventDefault()
  }
  function handleDragEnter (e) {
    e.preventDefault()
  }
  function handleDragOver (e) {
    targetArea = e.currentTarget
    targetArea.classList.add('over')
    e.preventDefault()
  }
  function handleDragLeave (e) {
    if (!targetArea) targetArea = e.currentTarget
    targetArea.classList.remove('over')
    e.preventDefault()
  }
  function handleDragEnd (e) {
    if (!targetArea) targetArea = e.currentTarget
    targetArea.classList.remove('over')
    send('setEditKey', null)
  }
  function getTargetArea () {
    return targetArea
  }
  return {
    handleDrag,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDragEnd,
    getTargetArea
  }
}
