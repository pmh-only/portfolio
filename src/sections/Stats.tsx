import React from 'react'

import { useTranslation } from 'react-i18next'
import StarCount from '../components/StarCount'
import GithubCrawl from '../components/GithubCrawl'
import HalfDivider from '../components/HalfDivider'
import ScrollSection from '../components/ScrollSection'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function StatsSection () {
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [window.innerHeight * 2, window.innerHeight * 3, window.innerHeight * 4], [0.5, 1, 0.5])

  return (
    <ScrollSection>
      <HalfDivider lbackground="/background3.gif" lclassName="bg-right">
        <div className="flex flex-col gap-5 justify-center">
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10"><FontAwesomeIcon icon={faUsers}/> {t('STATS_SECTION.HISTORY_CARD.TITLE')}</h2>

            <ul className="list-disc list-inside mt-3">
              <li>{t('STATS_SECTION.HISTORY_CARD.ITEMS.0')}</li>
              <li>{t('STATS_SECTION.HISTORY_CARD.ITEMS.1')}</li>
              <li>{t('STATS_SECTION.HISTORY_CARD.ITEMS.2')}</li>
              <li>{t('STATS_SECTION.HISTORY_CARD.ITEMS.3')}</li>
              <li>{t('STATS_SECTION.HISTORY_CARD.ITEMS.4')}</li>
            </ul>
          </motion.div>
        </div>
        <div className="break-all max-w-lg flex gap-5 items-center">
          <motion.div className="rounded shadow bg-white p-4 text-center" style={{ scale }}>
            <h2 className="text-xl font-bold border-b-2 px-3">Github.</h2>

            <StarCount />
          </motion.div>
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10">{t('STATS_SECTION.TODAY_WORKS')}</h2>

            <GithubCrawl />
          </motion.div>
        </div>
      </HalfDivider>
    </ScrollSection>
  )
}
