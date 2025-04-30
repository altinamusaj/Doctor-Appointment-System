import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between fs-6 py-3 mb-4 border-bottom border-secondary">

<img className="cursor-pointer" src={assets.logo} alt='' style={{ width: '150px' }} />
<ul className="d-none d-md-flex align-items-start gap-5 fw-medium">
    <NavLink>
        <li>HOME</li>
        <hr />
    </NavLink>

    <NavLink>
        <li>ALL DOCTORS</li>
        <hr />
    </NavLink>

    <NavLink>
        <li>ABOUT</li>
        <hr />
    </NavLink>

    <NavLink>
        <li>CONTACT</li>
        <hr />
    </NavLink>
</ul>
<div>
    <button>Create account</button>
</div>
    </div>
  )
}

export default Navbar