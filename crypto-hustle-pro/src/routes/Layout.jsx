import { Link, Outlet } from "react-router-dom"


export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link style={{color: "white"}} to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}