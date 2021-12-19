import React from 'react'

interface Props {
  title: string
  subtitle: string
  selected: number
  index: number
  background: string
  setSelected: (_: number) => void
}

export default function ProjectCard ({ title, subtitle, selected, index, setSelected, background }: Props) {
  return (
    <div className={`shadow flex-1 justify-self-stretch rounded min-w-max transform hover:-translate-y-1 ${selected >= 0 ? 'w-full' : ''}`} onClick={() => setSelected(index)}>
      <div className="h-64 w-full bg-center bg-cover cursor-pointer" style={{ backgroundImage: `url("${background}")` }}>
        <div className="flex flex-col justify-end w-full h-full text-white" style={{ backgroundColor: '#00000055' }}>
          <div className="p-5 transition-all ease-out" style={{ backgroundColor: selected === index ? '#3b82f6' : '#00000033' }}>
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
