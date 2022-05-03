import React from 'react'
import Frame from '../Frame/Frame'
import getMotions from './History.motion'

const History = () =>
  <Frame label="History" animations={getMotions()}>
  </Frame>

export default History
