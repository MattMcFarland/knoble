const html = require('choo/html')
const lane = require('../elements/lane')
const addLane = require('../elements/add-lane')

module.exports = (state, prev, send) => html`
  <main>
    ${state.lanes.map(laneData => lane(laneData))}
    ${addLane()}
  </main>
`
