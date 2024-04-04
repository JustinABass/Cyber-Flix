import React from 'react'

export default function WListC({ saved }) {
  return (
    <div>
        <img src={ saved.poster }  height='250' width='200'/>
        <h2>{saved.title}</h2>
    </div>
  )
}
