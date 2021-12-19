import React, { Suspense, useEffect } from 'react'

import { motion } from 'framer-motion'
import LanguageBtn from './components/LanguageBtn'
import RotateTable from './components/RotateTable'

import HelloSection from './sections/Hello'
import SkillsSection from './sections/Skills'
import CertsSection from './sections/Certs'
import StatsSection from './sections/Stats'
import ProjectsSection from './sections/Projects'
import ContactsSection from './sections/Contacts'

export default function App () {
  useEffect(() => {
    window.scrollTo(0, 0)

    const html = document.querySelector('html')
    if (!html) return

    const loading = document.querySelector('#loading')
    if (loading) loading.remove()

    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 5) {
        (html.style as any).scrollSnapType = 'none'
      } else (html.style as any).scrollSnapType = 'y mandatory'
    })
  }, [])

  return (
    <Suspense fallback="">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <LanguageBtn />

        <RotateTable />

        <HelloSection />
        <SkillsSection />
        <CertsSection />
        <StatsSection />

        <ProjectsSection />
        <ContactsSection />
      </motion.div>
    </Suspense>
  )
}
