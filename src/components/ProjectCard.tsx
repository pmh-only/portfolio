import React from 'react'

import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  subtitle: string
  selected: number
  index: number
  background: string
  enabled: boolean
  setSelected: (_: number) => void
}

export default function ProjectCard ({ title, subtitle, selected, index, setSelected, background, enabled }: Props) {
  const { i18n } = useTranslation()

  return (
    <div className="shadow rounded min-w-max xl:min-w-full xl:w-full transform hover:-translate-y-1" onMouseEnter={() => !(i18n.language === 'en-US' && !enabled) && setSelected(index)}>
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
