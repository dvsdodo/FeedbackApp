import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React App to leave Feedback</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to="/">Back to Home Page</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage