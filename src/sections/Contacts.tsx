import React from 'react'

import Container from '../components/Container'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function ContactsSection () {
  return (
    <div className="w-full p-5">
      <Container className="p-4 h-screen w-full">
        <div className="h-5/6 flex flex-col justify-center text-center">
          <h1 className="font-bold text-4xl">Park Min Hyeok</h1>
          <p>Portfolio</p>
        </div>
        <div className="sm:flex justify-between">
          <div className="text-left flex flex-col justify-end">
            <a className="hover:underline" href="https://github.com/pmh-only"><FontAwesomeIcon icon={faGithub}/> pmh-only</a>
            <a className="hover:underline" href="https://instagram.com/pmh_only"><FontAwesomeIcon icon={faInstagram}/> pmh_only</a>
            <a className="hover:underline" href="https://facebook.com/pmh.codes"><FontAwesomeIcon icon={faFacebook}/> pmh.codes</a>
            <a className="hover:underline" href="mailto:pmh_only@pmh.codes"><FontAwesomeIcon icon={faEnvelope}/> pmh_only@pmh.codes</a>
          </div>
          <div className="text-right flex flex-col justify-end">
            <p>donation? click <a className="hover:underline text-red-600" href="https://ko-fi.com/pmh_only">here</a>!</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
