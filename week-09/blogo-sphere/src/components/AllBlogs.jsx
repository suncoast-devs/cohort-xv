import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Blog from './Blog'

import config from '../config'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get(config.API_URL + '/api/blog').then(resp => {
      setBlogs(resp.data)
    })
  }, [])
  return (
    <div>
      <ul>
        {blogs.map(blog => {
          return <Blog {...blog} key={blog.id} />
        })}
      </ul>
    </div>
  )
}

export default AllBlogs
