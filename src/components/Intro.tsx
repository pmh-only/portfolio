import React from 'react'

export default function Intro () {
  return (
    <>
      <div id="intro" className="border-t-2 text-white pt-64 text-center" style={{ borderColor: '#ffffff33' }}>
        <div className="absolute w-0.5 left-1/2 z-0" style={{ background: '#ffffff33', height: '170%' }}></div>
        <img width={200} height={200} className="mx-auto" src="/profile.png" />
        <div className="p-3" style={{ background: '#00000055' }}>
          <p>Hi, My name is &quot;Park Min Hyeok (박민혁)&quot;</p>
          <p>I&apos;m <strong>Backend Developer & Server Engineer</strong></p>
          <p>(with some frontend, cybersecurity, blockchain knowledges)</p>
        </div>
        <div className="mx-auto text-left inline-block pl-36 mt-32" style={{ background: '#00000055' }}>
          <h2 className="font-bold text-2xl">I use...</h2>
          <ul>
            <li>TypeScript</li>
            <li>Go</li>
            <li>React (Next.js)</li>
            <li>Node.js & Deno</li>
          </ul>
        </div>
        <br />
        <div className="mx-auto text-right inline-block pr-48 mt-32" style={{ background: '#00000055' }}>
          <h2 className="font-bold text-2xl">I can...</h2>
          <ul>
            <li>Backend Development</li>
            <li>Frontend Development</li>
            <li>Cloud Architecting</li>
            <li>Server Engineering</li>
            <li>And Clean Coding :)</li>
          </ul>
        </div>
        <br />
        <div className="mx-auto text-left inline-block pl-32 sm:pl-72 mt-32" style={{ background: '#00000055' }}>
          <h2 className="font-bold text-2xl">I&apos;m in...</h2>
          <ul>
            <li>Best of the Best 10th (2021~)</li>
            <li>Pluxcon Network (2020~)</li>
            <li>GBSWHS Hacking club (2021~)</li>
            <li>Team wave (2019~)</li>
            <li>Team array (2019~)</li>
            <li>Tritium Networks (2016~2021)</li>
            <li>SoftWare And Guiders (2018~2020)</li>
          </ul>
        </div>
        <br />
        <div className="mx-auto text-right inline-block pr-72 my-32" style={{ background: '#00000055' }}>
          <h2 className="font-bold text-2xl">I have...</h2>
          <ul>
            <li>Info-processing enginner cert (HRDK)</li>
            <li>Network manager cert (ICQA)</li>
            <li>Linux master cert (KAIT)</li>
          </ul>
        </div>
      </div>
    </>
  )
}
