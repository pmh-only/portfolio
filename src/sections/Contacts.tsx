import React from 'react'

import Container from '../components/Container'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Draggable from 'react-draggable'

export default function ContactsSection () {
  return (
    <div className="w-full p-5">
      <Container className="flex flex-col w-full h-screen px-4 py-10">
        <div className="flex flex-col justify-center flex-1 text-center">
          <Draggable>
            <div className="cursor-move">
              <h1 className="text-4xl font-bold">Park Min Hyeok</h1>
              <p>Portfolio</p>
            </div>
          </Draggable>
        </div>
        <div className="justify-between sm:flex">
          <div className="flex flex-col justify-end text-left">
            <a className="hover:underline" href="https://github.com/pmh-only"><FontAwesomeIcon icon={faGithub}/> pmh-only</a>
            <a className="hover:underline" href="https://instagram.com/pmh_only"><FontAwesomeIcon icon={faInstagram}/> pmh_only</a>
            <a className="hover:underline" href="https://facebook.com/pmh.codes"><FontAwesomeIcon icon={faFacebook}/> pmh.codes</a>
            <a className="hover:underline" href="mailto:pmh_only@pmh.codes"><FontAwesomeIcon icon={faEnvelope}/> pmh_only@pmh.codes</a>
          </div>
          <div className="flex flex-col justify-end text-right">
            <p>donation? click <a className="text-red-600 hover:underline" href="https://ko-fi.com/pmh_only">here</a>!</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
