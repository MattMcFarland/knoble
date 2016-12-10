// Element: lane
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const story = require('./story')
const addStory = require('./add-story')
const removeLane = require('./remove-lane')
const dropzone = require('./dropzone')

function lane ({title, stories}, laneIndex, state, send) {
  return html`
    <section class="lane">
      <header><h2>${title}</h2></header>
      <ul>
        ${stories.map((storyData, storyIndex) => html`
          <li>
          ${dropzone(laneIndex, storyIndex, send)}
          ${story(storyData, state, laneIndex, storyIndex, send)}
          ${dropzone(laneIndex, storyIndex + 1, send)}
          </li>
        `)}
        <li>${addStory(laneIndex, send)}</li>
        ${(stories.length === 0) ? html`
          <li>
            ${dropzone(laneIndex, 0, send)}
            ${removeLane(laneIndex, send)}
          </li>` : ''}
      </ul>
    </section>
  `
}

module.exports = lane
