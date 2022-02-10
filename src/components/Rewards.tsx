import React from 'react'
import Container from './Container'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

function Rewards () {
  const { scrollYProgress } = useViewportScroll()
  const skewY = useTransform(scrollYProgress, [0.6, 0.66, 0.8, 1], [10, 0, 0, 10])
  const rotateY = useTransform(scrollYProgress, [0.6, 0.66, 0.8, 1], [50, 0, 0, 50])
  const scale = useTransform(scrollYProgress, [0.6, 0.66, 0.8, 1], [0.5, 1, 1, 0.5])
  const opacity = useTransform(scrollYProgress, [0.1, 0.175], [0, 1])

  return (
    <motion.div style={{ backgroundImage: 'url(/shield.png)', skewY, scale, rotateY, opacity }} className="fixed top-0 w-screen h-screen transition-all bg-neutral-900">
      <div className="absolute border-2 border-blue-500 -top-1 -left-1 -z-10" style={{ width: '101vw', height: '101vh' }} />
      <a href="#rewards" className="absolute px-10 py-1 text-3xl text-white bg-blue-500 border border-blue-500 cursor-pointer select-none -z-50 -left-1 -top-12 hover:bg-blue-600">Rewards</a>
      <a href="#list2" className="fixed px-3 py-2 text-sm text-white transition-colors ease-in-out border border-blue-500 select-none hover:bg-blue-600 hover:text-black bottom-10 left-10">Back</a>
      <Container>
        <div className="flex flex-col items-center justify-center h-full gap-5 text-white">
          <fieldset className="inline-block px-2 text-white bg-black border border-blue-500 bg-opacity-20">
            <legend className="px-2 py-0.5 bg-blue-500">Certificates.</legend>
            <div className="flex justify-center gap-3 p-3">
              <ul className="list-disc list-inside">
                <li>Linux Master 2 (KAIT)</li>
                <li>Network Manager 2 (ICQA)</li>
                <li>Information Processing Craftsman (HRDK)</li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="inline-block px-2 text-white bg-black border border-blue-500 bg-opacity-20">
            <legend className="px-2 py-0.5 bg-blue-500">Awards.</legend>
            <div className="flex justify-center gap-3 p-3">
              <ul className="list-disc list-inside">
                <li>World Skills Korea - excellence prize (4th)</li>
                <li>World Skills Gyeongbuk - gold medal (1st)</li>
                <li>2021 Gyeongbuk Software Hackathon - grand prize (1st)</li>
                <li>2020 Gyeongbuk Software Hackathon - excellence prize (2th)</li>
                <li>2021 GBSWHS Hackathon - grand prize (1st)</li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="inline-block px-2 text-white bg-black border border-blue-500 bg-opacity-20">
            <legend className="px-2 py-0.5 bg-blue-500">Pics.</legend>
            <div className="flex justify-center gap-3 py-2">
              <img src="/worldskills.jpg" width="200"/>
              <img src="/worldskills2.jpg" width="200"/>
            </div>
          </fieldset>
        </div>
      </Container>
    </motion.div>
  )
}

export default Rewards
