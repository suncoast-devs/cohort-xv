import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CreateGoal = () => {
  const [highLevelGoal, setHighLevelGoal] = useState('')
  const [specific, setSpecific] = useState('')
  const [measurable, setMeasurable] = useState('')
  const [achievable, setAchievable] = useState('')
  const [relevant, setRelevant] = useState('')
  const [timeBound, setTimeBound] = useState('')

  const submitForm = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://sdg-smart-goals.herokuapp.com/api/Goals',
      {
        highLevelGoal,
        specific,
        measurable,
        achievable,
        relevant,
        timeBound
      }
    )
    console.log(resp.data)
  }

  return (
    <>
      <nav>
        <Link to="/">&laquo; Back</Link>
      </nav>
      <form onSubmit={submitForm}>
        <section>
          <label>State your goal</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={highLevelGoal}
            onChange={e => setHighLevelGoal(e.target.value)}
          />
        </section>
        <section>
          <label>Specific</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={specific}
            onChange={e => setSpecific(e.target.value)}
          />
        </section>
        <section>
          <label>Measurable</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={measurable}
            onChange={e => setMeasurable(e.target.value)}
          />
        </section>
        <section>
          <label>Achievable</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={achievable}
            onChange={e => setAchievable(e.target.value)}
          />
        </section>
        <section>
          <label>Relatable</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={relevant}
            onChange={e => setRelevant(e.target.value)}
          />
        </section>
        <section>
          <label>TimeBound</label>
          <input
            type="text"
            placeholder="My Goal is..."
            value={timeBound}
            onChange={e => setTimeBound(e.target.value)}
          />
        </section>
        <button>Add goal</button>
      </form>
    </>
  )
}

export default CreateGoal
