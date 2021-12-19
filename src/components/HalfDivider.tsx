import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  rbackground?: string
  lbackground?: string
  rclassName?: string
  lclassName?: string
}

export default function HalfDivider ({ rclassName, lclassName, children, rbackground, lbackground }: Props) {
  return (
    <div className="flex">
      <div
        style={{ backgroundImage: `url("${lbackground}")` }}
        className={`h-screen hidden lg:block w-1/2 bg-cover ${lclassName}`}/>
      <div
        style={{ backgroundImage: `url("${rbackground}")` }}
        className={`w-full lg:w-1/2 h-screen flex flex-col justify-center gap-5 items-center bg-cover ${rclassName}`}>
        {children}
      </div>
    </div>
  )
}
