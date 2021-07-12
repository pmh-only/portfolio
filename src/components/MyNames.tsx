import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

function FlickingHeader ({ children }: any) {
  const controls = useAnimation()

  useEffect(() => {
    setTimeout(() => {
      controls.start({ translateX: 0 })
    }, 100)

    setInterval(() => {
      if (Math.random() < 0.95) return

      setTimeout(() =>
        controls.start({ color: '#ffffff00' }), 300)
      controls.start({ color: '#ffffff' })
    }, 1000)
  }, [])

  return <motion.h1 initial={{ translateX: -1000 }} drag="x" dragConstraints={{ left: 0, right: 0 }} whileHover={{ skewX: -20 }} animate={controls} aria-hidden>{children}</motion.h1>
}

export default function MyNames () {
  return (
    <div id="top" className="h-screen overflow-hidden text-transparent text-4xl sm:text-6xl lg:text-8xl font-black select-none" style={{ WebkitTextStroke: '2px #ffffff33' }}>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <a href="#intro"><FlickingHeader>Scroll me down</FlickingHeader></a>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <a href="#intro"><FlickingHeader>Scroll me down</FlickingHeader></a>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
      <a href="#intro"><FlickingHeader>Scroll me down</FlickingHeader></a>
      <FlickingHeader>Park Min Hyeok</FlickingHeader>
    </div>
  )
}
