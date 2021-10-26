import React from 'react'

import RotateAble from './RotateAble'
import { useTranslation } from 'react-i18next'
import ReactTypingEffect from 'react-typing-effect'

const height = window.innerHeight

const inputRanges = [
  [0.00, 0.00, 0.00, height],
  [0, height, height, height * 2],
  [height, height * 2, height * 2, height * 3],
  [height * 2, height * 3, height * 3, height * 4]
]

export default function RotateTable () {
  const { t } = useTranslation()

  return (
    <div>
      {inputRanges.map((_, i) => (
        <RotateAble key={i} inputRange={inputRanges[i]} className={`cursor-default select-none ${!(i % 2) ? 'text-white md:text-black' : 'text-black md:text-white'}`}>
          {t(`ROTATE_TABLE.TOP_LABEL.${i}`).split('/')[0]}<br />
          <ReactTypingEffect
            eraseSpeed={100}
            speed={100}
            typingDelay={100}
            eraseDelay={1000}
            text={t(`ROTATE_TABLE.BOTTOM_LABEL.${i}`, { returnObjects: true })}/>
          {t(`ROTATE_TABLE.TOP_LABEL.${i}`).split('/')[1]}<br />
        </RotateAble>
      ))}
    </div>
  )
}
