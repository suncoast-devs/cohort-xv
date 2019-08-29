import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import GoalItem from '../components/GoalItem'
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
            return <GoalItem key={goal.id} goal={goal} />
          })}
        </ul>
      </section>
    </>
  )
}

export default Dashboard
