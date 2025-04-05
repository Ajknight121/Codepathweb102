import { Link } from 'react-router-dom'
import React from 'react'

export default function NotFound() {
  return (
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
      <Link style={{ color: "white" }} to="/">
        Back to Home
      </Link>
    </main>
  )
}
