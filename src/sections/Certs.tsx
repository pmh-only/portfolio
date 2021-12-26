import React from 'react'

import { useTranslation } from 'react-i18next'
import HalfDivider from '../components/HalfDivider'
import ScrollSection from '../components/ScrollSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { faAward, faUserCheck } from '@fortawesome/free-solid-svg-icons'

export default function CertsSection () {
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [window.innerHeight, window.innerHeight * 2, window.innerHeight * 3], [0, 1, 0.5])

  return (
    <ScrollSection>
      <HalfDivider rbackground="/portfolio/background3.jpg" rclassName="bg-right">
        <div className="h-screen flex flex-col gap-5 justify-center p-5">
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10"><FontAwesomeIcon icon={faUserCheck}/> {t('CERT_SECTION.CERT_CARD.TITLE')}</h2>

            <ul className="list-disc list-inside mt-3">
              <li>{t('CERT_SECTION.CERT_CARD.ITEMS.0')}</li>
              <li>{t('CERT_SECTION.CERT_CARD.ITEMS.1')}</li>
              <li>{t('CERT_SECTION.CERT_CARD.ITEMS.2')}</li>
            </ul>
          </motion.div>
          <motion.div className="rounded shadow bg-white p-4" style={{ scale }}>
            <h2 className="text-lg font-bold border-b-2 pr-10"><FontAwesomeIcon icon={faAward}/> {t('CERT_SECTION.AWARD_CARD.TITLE')}</h2>

            <ul className="list-disc list-inside mt-3">
              <li>{t('CERT_SECTION.AWARD_CARD.ITEMS.0')}</li>
              <li>{t('CERT_SECTION.AWARD_CARD.ITEMS.1')}</li>
              <li>{t('CERT_SECTION.AWARD_CARD.ITEMS.2')}</li>
              <li>{t('CERT_SECTION.AWARD_CARD.ITEMS.3')}</li>
              <li>{t('CERT_SECTION.AWARD_CARD.ITEMS.4')}</li>
            </ul>
          </motion.div>
        </div>
      </HalfDivider>
    </ScrollSection>
  )
}
