import React from 'react'

import { easeInOut } from 'popmotion'
import { InputRange } from 'framer-motion/types/value/use-transform'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

interface Props {
  children: React.ReactNode
  inputRange: InputRange
  className?: string
}

export default function RotateAble ({ children, inputRange, className }: Props) {
  const { scrollY } = useViewportScroll()
  const rotate = useTransform(scrollY, inputRange, [-125, 0, 0, 125], { ease: easeInOut })

  return (
    <motion.h1
      className={`fixed top-0 mt-10 sm:mt-0 md:top-1/2 pl-10 pt-10 sm:pt-0 lg:pl-20 xl:pl-40 origin-left transform text-4xl lg:text-2xl xl:text-4xl font-bold ${className}`}
      style={{ rotate, translateY: '-50%' }}>
        {children}
    </motion.h1>
  )
}
