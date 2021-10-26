import React, { useEffect } from 'react'

import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function LanguageBtn () {
  const { t, i18n } = useTranslation()

  function onClick () {
    i18n.changeLanguage(i18n.language === 'ko-KR' ? 'en-US' : 'ko-KR')
  }

  useEffect(() => {
    setTimeout(() => {
      toast(() => (
      <motion.div whileHover={{ fontSize: '17px' }} className="bg-white flex rounded cursor-default">
        <p>{t('LANGUAGE_BUTTON.DESCRIPTION')}</p>
        <button onClick={onClick} className="px-3 hover:underline">{t('LANGUAGE_BUTTON.LABEL')}</button>
      </motion.div>
      ), { position: 'bottom-right', duration: 10000 })
    }, 1000)
  }, [])

  return <></>
}
