// Element: lane
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const story = require('./story')
const addStory = require('./add-story')

function lane ({title, stories}, laneIndex, send) {
  return html`
    <section class="lane">
      <header><h2>${title}</h2></header>
      <ul>
        ${stories.map((storyData, storyIndex) =>
          html`<li>${story(storyData, laneIndex, storyIndex, send)}</li>`
        )}
        <li>${addStory(laneIndex, send)}</li>
      </ul>
    </section>
  `
}

module.exports = lane
