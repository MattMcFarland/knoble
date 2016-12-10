module.exports = {
  state: {
    lanes: [
      {
        title: 'todo',
        stories: [
          {
            title: 'zero - zero',
            body: 'hello world'
          },
          {
            title: 'zero - one',
            body: 'hello world again'
          }
        ]
      },
      {
        title: 'in progress',
        stories: [
          {
            title: 'one - zero',
            body: 'hello world'
          },
          {
            title: 'one - one',
            body: 'hello world again'
          }
        ]
      }
    ]
  },
  reducers: {
    addStory: (data, state) => {
      return state.lanes[data.index].stories.push({ title: 'change me', body: 'change me' })
    },
    addLane: (data, state) => {
      return state.lanes.push({title: 'change me', stories: []})
    },
    removeStory: ({laneIndex, storyIndex}, state) => {
      return state.lanes[laneIndex].stories.splice(storyIndex, 1)
    },
    removeLane: (index, state) => {
      return state.lanes.splice(index, 1)
    },
    moveStory: ({from, to}, state) => {
      const newState = Object.assign({}, state)
      const story = Object.assign({}, state.lanes[from.laneIndex].stories[from.storyIndex])
      newState.lanes[from.laneIndex].stories.splice(from.storyIndex, 1)
      newState.lanes[to.laneIndex].stories.splice(to.storyIndex, 0, story)
      return newState
    }
    // update: (data, state) => ({ title: data.value })
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: (data, state, send, done) => {
      // do stuff
    }
    */
  },
  subscriptions: [
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    (send, done) => {
      // do stuff
    }
    */
  ]
}
