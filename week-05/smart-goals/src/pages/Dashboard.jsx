import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
  const [goals, setGoals] = useState([])
  const fetchGoals = async () => {
    const resp = await axios.get(
      'https://sdg-smart-goals.herokuapp.com/api/Goals'
    )
    setGoals(resp.data)
  }
  useEffect(() => {
    fetchGoals()
  }, [])
  return (
    <>
      <nav>
        <Link to="/new">+ NEW</Link>
      </nav>
      <section>
        <ul>
          {goals.map(goal => {
            return (
              <li>
                <header>My goal is {goal.highLevelGoal}</header>
              </li>
            )
          })}
          {/* 
          <li>
            <header>My Goal is to create a online course about Blazor</header>
            <ul>
              <li>
                <header>Specific</header>
                <main>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  fugit aut quidem ipsam sint ex, rerum totam? Quidem quo
                  commodi at exercitationem qui aliquid repudiandae dolorem id,
                  dolore velit minima?
                </main>
              </li>
              <li>
                <header>Measurable</header>
                <main>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  fugit aut quidem ipsam sint ex, rerum totam? Quidem quo
                  commodi at exercitationem qui aliquid repudiandae dolorem id,
                  dolore velit minima?
                </main>
              </li>
              <li>
                <header>Achievable</header>
                <main>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  fugit aut quidem ipsam sint ex, rerum totam? Quidem quo
                  commodi at exercitationem qui aliquid repudiandae dolorem id,
                  dolore velit minima?
                </main>
              </li>
              <li>
                <header>Relevant</header>
                <main>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  fugit aut quidem ipsam sint ex, rerum totam? Quidem quo
                  commodi at exercitationem qui aliquid repudiandae dolorem id,
                  dolore velit minima?
                </main>
              </li>
              <li>
                <header>Time Bound</header>
                <main>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  fugit aut quidem ipsam sint ex, rerum totam? Quidem quo
                  commodi at exercitationem qui aliquid repudiandae dolorem id,
                  dolore velit minima?
                </main>
              </li>
            </ul>
          </li> */}
        </ul>
      </section>
    </>
  )
}

export default Dashboard
