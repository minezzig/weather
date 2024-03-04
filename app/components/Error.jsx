import React from 'react'

export default function Error({error}) {
  return (
    <div className="m-auto pt-10 md:pt-0 text-4xl text-white">{error}</div>
  )
}
