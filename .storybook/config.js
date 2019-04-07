import { configure, addParameters } from '@storybook/react'

import '../src/styles'

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    name: 'Waigs Portfolio',
    isFullScreen: false,
    showPanel: true,
  },
})

configure(loadStories, module)
