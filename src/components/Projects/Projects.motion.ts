import { MotionStyle, useTransform } from 'framer-motion'
import usePage from 'use-motion-page'

function getMotions (): MotionStyle {
  const page = usePage()

  return {
    skewY: useTransform(page, [5, 6, 7], [10, 0, 10]),
    rotateY: useTransform(page, [5, 6, 7], [50, 0, 50]),
    scale: useTransform(page, [5, 6, 7], [0.5, 1, 0.5]),
    left: useTransform(page, [5, 6, 7], [100, 0, 100]),
    opacity: useTransform(page, [0, 1], [1, 1])
  }
}

export default getMotions