import { useState } from 'react'
import './App.css'
import TrendingBox from './assets/TrendingBox.svg'
import Href from './assets/Href.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img className='logo logo1' src={TrendingBox} />
        </a>
        <a href="https://www.href.com.ar/en/" target="_blank">
          <img className='logo logo2' src={Href} />
        </a>
      </div>
      <h1>Digital solutions for small businesses</h1>
      <p>We are two united companies of students committed to putting our knowledge into practice, helping businesses to have their first website or a professional website.</p>
      <div className="card">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOKRjYq7hXq0vb56oWz1Jd5C8Y2mM85RqXPQ1yb7PJJv4gXA/viewform" target="_blank"><button >
          Let's go to the Survey!
        </button> </a>
      </div >
      <p className="read-the-docs">
        Click on the <strong>Trending Box</strong> and <strong>Href</strong> logos to learn more
      </p>
    </>

  )
}

export default App
