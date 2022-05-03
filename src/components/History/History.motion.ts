import { MotionStyle, useTransform } from 'framer-motion'
import usePage from 'use-motion-page'

function getMotions (): MotionStyle {
  const page = usePage()

  return {
    skewY: useTransform(page, [3, 4, 5], [10, 0, 10]),
    rotateY: useTransform(page, [3, 4, 5], [50, 0, 50]),
    scale: useTransform(page, [3, 4, 5], [0.5, 1, 0.5]),
    opacity: useTransform(page, [0, 1], [1, 1])
  }
}

export default getMotions
