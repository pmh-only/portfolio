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
      className={`hidden sm:block w-full lg:w-1/2 fixed top-0 mt-20 lg:mt-0 lg:top-1/2 pt-10 pr-10 sm:pt-0 pl-20 origin-left transform text-xl sm:text-4xl lg:text-2xl xl:text-4xl font-bold ${className}`}
      style={{ rotate, translateY: '-50%' }}>
        {children}
    </motion.h1>
  )
}
