import React from 'react'
import Intro from './components/Intro'
import Notice from './components/Notice'
import MyNames from './components/MyNames'
import Animation from './components/Animation'

export default function App () {
  return (
    <>
      <Notice />
      <Animation />
      <MyNames />
      <Intro />
    </>
  )
}
