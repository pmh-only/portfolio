import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

function Jumbotron () {
  const { scrollYProgress } = useViewportScroll()
  const skewY = useTransform(scrollYProgress, [0, 0.15], [0, 10])
  const rotateY = useTransform(scrollYProgress, [0.025, 0.15], [0, 50])
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5])
  const left = useTransform(scrollYProgress, [0.05, 0.15], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.65, 1], [1, 1, 0, 0, 1, 1, 0, 0])

  return (
    <motion.div style={{ skewY, scale, rotateY, left, opacity }} className="fixed top-0 z-20 w-screen h-screen">
      <video src="/Main.mp4" autoPlay muted loop className="absolute object-cover w-full h-full"/>
      <div className="absolute border-2 border-red-500 -top-1 -left-1" style={{ width: '101vw', height: '101vh' }} />
      <a href="#jumbotron" className="absolute px-10 py-1 text-3xl text-white bg-red-500 border border-red-500 cursor-pointer select-none -left-1 -top-12 hover:bg-red-600">Jumbotron</a>
      <div className="absolute w-full h-full bg-black opacity-50"/>
      <div className="absolute flex flex-col items-start justify-center h-full pl-20 text-white gap-7">
        <div className="text-6xl">
          <p className="text-5xl font-thin tracking-tighter font-roboto">Park</p>
          <p className="font-bold tracking-tight font-roboto">Min Hyeok</p>
          <motion.div initial={{ maxWidth: 0 }} transition={{ delay: 0.3 }} animate={{ maxWidth: 230 }} className="h-0 border-2 border-red-500"/>
        </div>
        <ul className="text-sm font-thin">
          <li>Software</li>
          <li>Cyber Security</li>
          <li>Cloud Computing</li>
        </ul>

        <a href="#list" className="px-3 py-2 text-sm transition-colors ease-in-out border select-none hover:bg-white hover:text-black">
          Learn More
        </a>
      </div>
    </motion.div>
  )
}

export default Jumbotron
