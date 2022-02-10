import React from 'react'
import Jumbotron from './components/Jumbotron'
import Rewards from './components/Rewards'
import Skills from './components/Skills'

function App () {
  return (
    <div id="app">
      <Jumbotron />
      <Skills />
      <Rewards />
      <div className="h-screen" id="jumbotron"/>
      <div className="h-screen" />
      <div className="h-screen" id="list"/>
      <div className="h-screen" />
      <div className="h-screen" id="skills"/>
      <div className="h-screen" />
      <div className="h-screen" id="list2"/>
      <div className="h-screen" />
      <div className="h-screen" id="rewards"/>
      <div className="h-screen" />
      <div className="h-screen" />
    </div>
  )
}

export default App
