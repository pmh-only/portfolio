import React from 'react'
import useSWR from 'swr'
import Container from './Container'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Skills () {
  const { scrollYProgress } = useViewportScroll()
  const { data: stars } = useSWR('https://api.github-star-counter.workers.dev/user/pmh-only', fetcher)
  const { data: times } = useSWR('https://cors.pmhonly.workers.dev/?https://wakatime.com/share/@pmh_only/4b833144-380e-4c3b-a0ec-5917c17ba03e.json', fetcher)
  const skewY = useTransform(scrollYProgress, [0.25, 0.33, 0.4, 0.43], [10, 0, 0, 10])
  const rotateY = useTransform(scrollYProgress, [0.25, 0.33, 0.4, 0.43], [50, 0, 0, 50])
  const scale = useTransform(scrollYProgress, [0.25, 0.33, 0.4, 0.43], [0.5, 1, 1, 0.5])
  const left = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.4, 0.43, 1], [-100, -100, 0, 0, -100, -100])
  const top = useTransform(scrollYProgress, [0, 0], [0, 0])
  const opacity = useTransform(scrollYProgress, [0.1, 0.175, 0.6, 0.65], [0, 1, 1, 0])

  return (
    <motion.div style={{ backgroundImage: 'url(/dev.png)', skewY, scale, rotateY, left, opacity, top }} className="fixed top-0 z-10 w-screen h-screen transition-all bg-right bg-no-repeat bg-neutral-900 hover:-top-10">
      <div className="absolute border-2 border-yellow-500 -top-1 -left-1 -z-10" style={{ width: '101vw', height: '101vh' }} />
      <a href="#skills" className="absolute px-10 py-1 text-3xl text-black bg-yellow-500 border border-yellow-500 cursor-pointer select-none -z-50 -left-1 -top-12 hover:bg-yellow-600">Skills</a>
      <a href="#list" className="fixed px-3 py-2 text-sm text-white transition-colors ease-in-out border border-yellow-500 select-none hover:bg-yellow-600 hover:text-black bottom-10 left-10">Back</a>
      <Container>
        <div className="flex flex-col justify-center h-full gap-5 text-white">
          <div className="flex justify-center gap-5">
            <fieldset className="inline-block px-2 text-white bg-black border border-yellow-500 bg-opacity-20 ">
              <legend className="px-2 py-0.5 text-black bg-yellow-500">Titles.</legend>
              <div className="p-5 pt-3">
                <ul>
                  <li>Frontend Developer</li>
                  <li>Backend Developer</li>
                  <li>Server Enginner</li>
                </ul>
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center gap-5">
            <fieldset className="inline-block px-2 text-white bg-black border border-yellow-500 bg-opacity-20 ">
              <legend className="px-2 py-0.5 text-black bg-yellow-500">Languages.</legend>
              <div className="flex flex-wrap justify-center max-w-sm gap-10 p-5 pt-3 text-center">
                <div>
                  <i className="text-6xl devicon-typescript-plain"></i>
                  <p>TypeScript</p>
                </div>
                <div>
                  <i className="text-6xl devicon-go-original-wordmark"></i>
                  <p>Golang</p>
                </div>
                <div>
                  <i className="text-6xl devicon-dart-plain"></i>
                  <p>Dart</p>
                </div>
                <div>
                  <i className="text-6xl devicon-java-plain"></i>
                  <p>Java</p>
                </div>
                <div>
                  <i className="text-6xl devicon-cplusplus-plain"></i>
                  <p>C++</p>
                </div>
              </div>
            </fieldset>
            <fieldset className="inline-block px-2 text-white bg-black border border-yellow-500 bg-opacity-20 ">
              <legend className="px-2 py-0.5 text-black bg-yellow-500">Frameworks.</legend>
              <div className="flex flex-wrap justify-center max-w-sm gap-10 p-5 pt-3 text-center flex-wrapjustify-center">
                <div>
                  <i className="text-6xl devicon-react-original"></i>
                  <p>React</p>
                </div>
                <div>
                  <i className="text-6xl devicon-nextjs-original"></i>
                  <p>Next</p>
                </div>
                <div>
                  <i className="text-6xl devicon-gatsby-plain"></i>
                  <p>Gatsby</p>
                </div>
                <div>
                  <i className="text-6xl devicon-go-plain"></i>
                  <p>Go fiber</p>
                </div>
                <div>
                  <i className="text-6xl devicon-express-original"></i>
                  <p>Express</p>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center gap-5">
            <fieldset className="inline-block px-2 text-white bg-black border border-yellow-500 bg-opacity-20 ">
              <legend className="px-2 py-0.5 text-black bg-yellow-500">Github Star.</legend>
              <a target="_blank" href="https://github.com/pmh-only" className="block p-5 pt-3 text-center hover:underline" rel="noreferrer">
                {!(stars?.stars) && 'Loading...'}
                { (stars?.stars) && `${stars.stars} stars`}
              </a>
            </fieldset>
            <fieldset className="inline-block px-2 text-white bg-black border border-yellow-500 bg-opacity-20 ">
              <legend className="px-2 py-0.5 text-black bg-yellow-500">Today Works.</legend>
              <a target="_blank" href="https://wakatime.com/@pmh_only" className="block p-5 pt-3 text-center hover:underline" rel="noreferrer">
                {!(times?.data[times.data.length - 1].grand_total.text) && 'Loading...'}
                { (times?.data[times.data.length - 1].grand_total.text) && `${times.data[times.data.length - 1].grand_total.text}`}
              </a>
            </fieldset>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default Skills
