import React, { Fragment } from 'react'

import History from '../History/History'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

const App = () =>
  <Fragment>
    <Intro />
    <Skills />
    <History />
    <Projects />
  </Fragment>

export default App
