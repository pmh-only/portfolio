import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Container ({ children, className }: Props) {
  return (
    <div className="flex justify-center">
      <div className={`container ${className}`} style={{ scrollSnapAlign: 'start' }}>
        {children}
      </div>
    </div>
  )
}
