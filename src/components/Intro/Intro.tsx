import React from 'react'
import Frame from '../Frame/Frame'
import getMotions from './Intro.motion'

const Intro = () =>
  <Frame
    label="Intro"
    animations={getMotions()}>

  </Frame>

export default Intro
