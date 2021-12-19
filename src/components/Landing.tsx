import React, { useState } from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Landing () {
  const [showFloat, setShowFloat] = useState(false)

  function onFaidOut () {
    setShowFloat(true)
  }

  if (showFloat) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2 }}
      onAnimationComplete={onFaidOut}
      className={clsx(
        'flex flex-col items-center justify-center',
        'fixed top-0 left-0 bg-fafafa z-50',
        'h-screen w-screen cursor-default select-none')}>

      <div className="text-6xl transform">
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.3 }}
          className="font-medium text-left leading-9">pmh</motion.p>

        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.3 }}
          className="font-thin text-right leading-9 pl-8 pb-8">.codes</motion.p>
      </div>

      <motion.p
        className="font-thin text-xs"
        initial={{ opacity: 0, translateY: window.innerHeight / 3 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5 }}>
        Always learning new things. That&apos;s my life.
      </motion.p>
    </motion.div>
  )
}
