import React, { useState } from 'react'

const GoalItem = props => {
  const [isOpen, setIsOpen] = useState(false)
  const showMore = () => {
    console.log('showing details for', props.goal)
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  const getDetails = () => {
    if (showMore) {
      return <h2>Only showing when true</h2>
    } else {
      return <></>
    }
  }
  return (
    <li onClick={showMore}>
      <header>My goal is {props.goal.highLevelGoal}</header>

      {isOpen && <h2>Only showing when true</h2>}

      {isOpen ? <h2>Only show when true</h2> : <></>}

      {getDetails()}

      {isOpen && (
        <ul>
          <li>
            <header>Specific</header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit aut quidem ipsam sint ex, rerum totam? Quidem quo commodi at
              exercitationem qui aliquid repudiandae dolorem id, dolore velit
              minima?
            </main>
          </li>
          <li>
            <header>Measurable</header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit aut quidem ipsam sint ex, rerum totam? Quidem quo commodi at
              exercitationem qui aliquid repudiandae dolorem id, dolore velit
              minima?
            </main>
          </li>
          <li>
            <header>Achievable</header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit aut quidem ipsam sint ex, rerum totam? Quidem quo commodi at
              exercitationem qui aliquid repudiandae dolorem id, dolore velit
              minima?
            </main>
          </li>
          <li>
            <header>Relevant</header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit aut quidem ipsam sint ex, rerum totam? Quidem quo commodi at
              exercitationem qui aliquid repudiandae dolorem id, dolore velit
              minima?
            </main>
          </li>
          <li>
            <header>Time Bound</header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit aut quidem ipsam sint ex, rerum totam? Quidem quo commodi at
              exercitationem qui aliquid repudiandae dolorem id, dolore velit
              minima?
            </main>
          </li>
        </ul>
      )}
    </li>
  )
}

export default GoalItem
