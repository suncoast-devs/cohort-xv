import React, { useState } from 'react'

const MilesHiked = () => {
  const [miles, setMiles] = useState(0)
  return (
    <>
      <section>
        <h2>Miles Hiked: {miles}</h2>
        {/* <button
          onClick={() =>
            setMiles(prevMiles => {
              console.log(prevMiles)
              if (prevMiles > 0) {
                return prevMiles - 1
              } else {
                return 0
              }
            })
          }
        >
          -
        </button> */}
        <button
          onClick={() =>
            setMiles(prevMiles => (prevMiles > 0 ? prevMiles - 1 : 0))
          }
        >
          -
        </button>
        <button onClick={() => setMiles(prevMiles => prevMiles + 1)}>+</button>
      </section>
    </>
  )
}

export default MilesHiked
