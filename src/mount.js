import React, {Component} from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

if (module.hot) {
  module.hot.accept()
}

window.tests = {}
window.currentContext = ""
const testRootHandler = (title, fn) => {
  window.currentContext = title
  window.tests[title] = {}
  fn()
}
window.describe = testRootHandler

const testHandler = (title, fn) => {
  tests[window.currentContext][window.currentContext + " " + title] = fn
}
window.it = testHandler
window.test = testHandler

const mount = ReactCards => render(<AppContainer><ReactCards /></AppContainer>, window.mountNode)

export default mount
