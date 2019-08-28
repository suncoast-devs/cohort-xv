import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DogPage = () => {
  const [dogs, setDogs] = useState([])
  const [searchTerm, setSearchTerm] = useState('hound')

  const fetchData = async () => {
    const resp = await axios.get(
      `https://dog.ceo/api/breed/${searchTerm}/images`
    )
    console.log(resp.data)
    setDogs(resp.data.message.slice(0, 10))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main>
        <section>
          <input
            type="search"
            className="search-box"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={fetchData}>
            <i className="fas fa-search fa-flip-horizontal "></i>SEARCH
          </button>
        </section>
        <section>
          <ul>
            {dogs.map((dogImage, i) => {
              return (
                <li key={i}>
                  <img src={dogImage} />
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default DogPage
