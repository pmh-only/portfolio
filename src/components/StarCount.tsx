import React from 'react'

import useSWR from 'swr'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function StarCount () {
  const { data, error } = useSWR('https://api.github-star-counter.workers.dev/user/pmh-only', fetcher)

  if (!data) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <p className="text-2xl font-bold"><FontAwesomeIcon icon={faStar}/> {data.stars}</p>
}
