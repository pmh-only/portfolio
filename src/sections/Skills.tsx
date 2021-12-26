import React from 'react'

import { useTranslation } from 'react-i18next'
import ScrollSection from '../components/ScrollSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faCogs, faServer, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faAws } from '@fortawesome/free-brands-svg-icons'

import GoOriginalIcon from 'react-devicons/go/original'
import JavaOriginalIcon from 'react-devicons/java/original'
import FlutterOriginalIcon from 'react-devicons/flutter/original'
import TypescriptOriginalIcon from 'react-devicons/typescript/original'

import HalfDivider from '../components/HalfDivider'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function SkillsSection () {
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, window.innerHeight, window.innerHeight * 2], [0.5, 1, 0.5])

  return (
    <ScrollSection>
      <HalfDivider lbackground="background2.jpg" lclassName="bg-left">
        <div className="flex flex-col gap-10 px-5">
          <motion.div className="p-4 bg-white shadow" style={{ scale }}>
            <h2 className="pr-10 text-lg font-bold border-b-2">{t('SKILL_SECTION.LANGUAGE_CARD.TITLE')}</h2>

            <div className="flex justify-between gap-10 text-center mt-7">
              <div className="flex flex-col items-center"><TypescriptOriginalIcon size="40px" className="inline" />{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.0')}</div>
              <div className="flex flex-col items-center"><GoOriginalIcon size="40px" className="inline" />{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.1')}</div>
              <div className="flex flex-col items-center"><FlutterOriginalIcon size="40px" className="inline" />{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.2')}</div>
              <div className="flex flex-col items-center"><JavaOriginalIcon size="40px" className="inline"/>{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.3')}</div>
            </div>
          </motion.div>

          <motion.div className="p-4 bg-white shadow" style={{ scale }}>
            <h2 className="pr-10 text-lg font-bold border-b-2">{t('SKILL_SECTION.TITLES_CARD.TITLE')}</h2>

            <div className="flex gap-5 text-center justify-evenly mt-7">
              <div className="flex flex-col items-center"><FontAwesomeIcon size="2x" icon={faCogs}/>{t('SKILL_SECTION.TITLES_CARD.ITEMS.0')}</div>
              <div className="flex flex-col items-center"><FontAwesomeIcon size="2x" icon={faServer}/>{t('SKILL_SECTION.TITLES_CARD.ITEMS.1')}</div>
            </div>

            <div className="flex gap-5 text-center justify-evenly mt-7">
              <div className="flex flex-col items-center"><FontAwesomeIcon size="2x" icon={faRobot}/>{t('SKILL_SECTION.TITLES_CARD.ITEMS.2')}</div>
              <div className="flex flex-col items-center"><FontAwesomeIcon size="2x" icon={faAws}/>{t('SKILL_SECTION.TITLES_CARD.ITEMS.3')}</div>
            </div>
          </motion.div>

          <motion.div className="p-4 bg-white shadow" style={{ scale }}>
            <h2 className="pr-10 text-lg font-bold border-b-2"><FontAwesomeIcon icon={faTools}/> {t('SKILL_SECTION.SKILLS_CARD.TITLE')}</h2>

            <ul className="mt-3 list-disc list-inside">
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.0')}</li>
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.1')}</li>
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.2')}</li>
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.3')}</li>
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.4')}</li>
              <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.5')}</li>
            </ul>
          </motion.div>
        </div>
      </HalfDivider>
    </ScrollSection>
  )
}
