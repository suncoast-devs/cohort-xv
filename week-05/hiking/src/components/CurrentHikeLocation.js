import React, { useState } from 'react'

const CurrentHikeLocation = () => {
  const [trailName, setTrailName] = useState('')
  const [displayName, setDisplayName] = useState('enter the name of the trail')
  return (
    <div>
      <h2>{displayName}</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          setDisplayName(trailName)
          setTrailName('')
        }}
      >
        <input
          type="text"
          placeholder="update trail name"
          value={trailName}
          onChange={e => {
            setTrailName(e.target.value)
          }}
        />
      </form>
    </div>
  )
}

export default CurrentHikeLocation
