import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>Reforzamiento</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'Login'}>Login</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={'About'}>About</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div className='container-fluid'>
        <Outlet />
      </div>
    </>
  )
}
