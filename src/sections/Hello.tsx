import React from 'react'

import HalfDivider from '../components/HalfDivider'
import ScrollSection from '../components/ScrollSection'

import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { faBirthdayCake, faCat, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

export default function HelloSection () {
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [0, window.innerHeight], [1, 0.2])

  function onClick () {
    toast.error('Ouch!')
  }

  return (
    <ScrollSection>
      <HalfDivider rbackground="/background.jpg" rclassName="bg-right">
        <div className="w-full flex flex-col items-center bg-fixed">
          <div className="h-screen flex flex-col justify-center">
            <div className="bg-transparent sm:bg-white gap-10 sm:gap-0 p-5 pr-10 rounded sm:shadow break-all max-w-lg flex flex-col sm:flex-row text-white sm:text-black items-center justify-center">
              <div className="transform -translate-x-0 sm:-translate-x-10">
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ scale }}
                  src="/profile.jpg"
                  onClick={onClick}
                  className="rounded-full shadow-lg box-content border-2 border-purple-300"
                  width="200" height="200" />
              </div>
              <div className="text-center sm:text-right">
                <h2 className="text-lg font-bold">{t('HELLO_SECTION.TITLE')}</h2>
                <p className="inline sm:block">{t('HELLO_SECTION.BIO.0')} </p>
                <p className="inline sm:block">{t('HELLO_SECTION.BIO.1')}</p>

                <br />

                <p><FontAwesomeIcon icon={faBirthdayCake} /> {t('HELLO_SECTION.BIRTH')}</p>
                <p><FontAwesomeIcon icon={faGlobeAsia} /> {t('HELLO_SECTION.LOCATE')}</p>
                <p><FontAwesomeIcon icon={faCat} /> {t('HELLO_SECTION.LIKE_CATS')}</p>
              </div>
            </div>

            <motion.p whileHover={{ translateY: 10 }} className="cursor-default text-center text-sm mt-1 text-gray-100">{t('HELLO_SECTION.SCROLL_DOWN')}</motion.p>
          </div>
        </div>
      </HalfDivider>
    </ScrollSection>
  )
}
