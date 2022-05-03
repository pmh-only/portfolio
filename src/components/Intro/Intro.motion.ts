import { MotionStyle, useTransform } from 'framer-motion'
import usePage from 'use-motion-page'

function getMotions (): MotionStyle {
  const page = usePage()

  return {
    skewY: useTransform(page, [0, 1], [0, 10]),
    rotateY: useTransform(page, [0, 1], [0, 50]),
    scale: useTransform(page, [0, 1], [1, 0.5]),
    left: useTransform(page, [0, 1], [0, -200]),
    opacity: useTransform(page, [0, 1], [1, 1])
  }
}

export default getMotions
