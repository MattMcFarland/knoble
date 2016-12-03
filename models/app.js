module.exports = {
  state: {
    lanes: [
      {
        title: 'todo',
        stories: [
          {
            title: 'cool story bro',
            body: 'hello world'
          },
          {
            title: 'cool story bro 2',
            body: 'hello world again'
          }
        ]
      },
      {
        title: 'in progress',
        stories: [
          {
            title: 'cool story bro',
            body: 'hello world'
          },
          {
            title: 'cool story bro 2',
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
    }
    // update: (data, state) => ({ title: data.value })
  },
  effects: {
    moveStory: (data, state) => {
      console.log(data)
    }
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
