const html = require('choo/html')
const lane = require('../elements/lane')
const addLane = require('../elements/add-lane')

module.exports = (state, prev, send) => html`
  <main class="kanban">
    ${state.lanes.map((laneData, index) => lane(laneData, index, send))}
    ${addLane(send)}
  </main>
`
