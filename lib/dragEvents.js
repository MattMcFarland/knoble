module.exports = function setup() {
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
    targetArea.classList.remove('over')
    e.preventDefault()
  }
  function handleDragEnd (e) {
    targetArea.classList.remove('over')
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


/*

*/
