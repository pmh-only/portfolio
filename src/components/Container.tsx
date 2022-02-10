import React from 'react'

interface Props {
  children: React.ReactNode
}

function Container ({ children }: Props) {
  return (
    <div className="flex justify-center h-full">
      <div className="container h-full max-w-6xl p-5">
        {children}
      </div>
    </div>
  )
}

export default Container
