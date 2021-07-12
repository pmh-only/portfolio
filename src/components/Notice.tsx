import React, { useState } from 'react'

export default function Notice () {
  const [hide, setHide] = useState(false)

  if (hide) return <></>

  return (
    <div className="h-screen w-screen fixed top-0 left-0 backdrop-filter backdrop-blur flex z-50" style={{ background: '#00000055' }}>
      <div className="mx-auto my-auto p-10 text-center backdrop-filter backdrop-blur text-white" style={{ background: '#00000011' }}>
        <h3 className="text-xl font-bold">Under Construction</h3>
        <p>this site is under construction</p>
        <button className="border-2 border-white px-3 py-1 mt-5 hover:text-black hover:bg-white" onClick={() => setHide(true)}>I don&apos;t care</button>
      </div>
    </div>
  )
}
