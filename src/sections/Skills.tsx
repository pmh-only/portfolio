import React from 'react'

import { useTranslation } from 'react-i18next'
import ScrollSection from '../components/ScrollSection'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GoOriginalIcon from 'react-devicons/go/original'
import JavaOriginalIcon from 'react-devicons/java/original'
import DartOriginalIcon from 'react-devicons/dart/original'
import FlutterOriginalIcon from 'react-devicons/flutter/original'
import JavascriptOriginalIcon from 'react-devicons/javascript/original'
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
        <div className="break-all max-w-lg flex gap-5 items-center">
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10">{t('SKILL_SECTION.LANGUAGE_CARD.TITLE')}</h2>

            <ul className="list-disc list-inside mt-3">
              <li>{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.0')} <JavascriptOriginalIcon className="inline" /> <TypescriptOriginalIcon className="inline" /></li>
              <li>{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.1')} <GoOriginalIcon className="inline" /></li>
              <li>{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.2')} <DartOriginalIcon className="inline" /> <FlutterOriginalIcon className="inline" /></li>
              <li>{t('SKILL_SECTION.LANGUAGE_CARD.ITEMS.3')} <JavaOriginalIcon className="inline"/></li>
            </ul>
          </motion.div>
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10">{t('SKILL_SECTION.TITLES_CARD.TITLE')}</h2>

            <ul className="list-disc list-inside mt-3">
              <li>{t('SKILL_SECTION.TITLES_CARD.ITEMS.0')}</li>
              <li>{t('SKILL_SECTION.TITLES_CARD.ITEMS.1')}</li>
              <li>{t('SKILL_SECTION.TITLES_CARD.ITEMS.2')}</li>
              <li>{t('SKILL_SECTION.TITLES_CARD.ITEMS.3')}</li>
            </ul>
          </motion.div>
        </div>
        <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
          <h2 className="text-lg font-bold border-b-2 pr-10"><FontAwesomeIcon icon={faTools}/> {t('SKILL_SECTION.SKILLS_CARD.TITLE')}</h2>

          <ul className="list-disc list-inside mt-3">
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.0')}</li>
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.1')}</li>
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.2')}</li>
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.3')}</li>
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.4')}</li>
            <li>{t('SKILL_SECTION.SKILLS_CARD.ITEMS.5')}</li>
          </ul>
        </motion.div>
      </HalfDivider>
    </ScrollSection>
  )
}
