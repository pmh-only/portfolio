import React from 'react'
import useSWR from 'swr'
import { useTranslation } from 'react-i18next'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function StarCount () {
  const { t } = useTranslation()
  const { data, error } = useSWR('https://cors.pmhonly.workers.dev/?https://wakatime.com/share/@pmh_only/4b833144-380e-4c3b-a0ec-5917c17ba03e.json', fetcher)

  if (!data) return <p>{t('EXTRA.LOADING')}</p>
  if (error) return <p>{t('EXTRA.ERROR')}</p>

  return <p className="text-xl font-bold"><FontAwesomeIcon icon={faClock}/> {data.data[data.data.length - 1].grand_total.text}</p>
}
