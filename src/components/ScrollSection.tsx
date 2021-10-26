import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ScrollSection ({ children }: Props) {
  return <section style={{ scrollSnapAlign: 'start' }}
    className="h-screen">{children}</section>
}
