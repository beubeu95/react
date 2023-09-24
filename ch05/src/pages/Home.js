import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <hr/>
        <ul>
            <li>
                <Link to="/about">Intro</Link>
            </li>
            <li>
                <Link to="/profile/sangmin">Developer 1</Link>
            </li>
            <li>
                <Link to="/profile/yeun">Developer 2</Link>
            </li>
            <li>
                <Link to="/profile/sehoon">Developer 3</Link>
            </li>
            <li>
                <Link to="/dataroom">자료실</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home