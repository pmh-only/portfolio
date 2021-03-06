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
  useEffect(() => window.scrollTo(0, 0), [])

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
