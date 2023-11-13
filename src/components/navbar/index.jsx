import React from 'react'
import c from './navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavList } from '../../utils'
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
  const path = useLocation().pathname
  return (
    <div className={c.container}>
      <div className={c.navbar}>
        <div className={c.left}>
          <Link to={'/'}>
            <img 
              src='/img/logo.png'
              alt='logo'
            />
          </Link>

          <ul className={c.list}>
            {
              NavList.map(item => (
                <li key={item.id}>
                  <Link to={item.path} className={path === item.path ? c.active : null}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={c.right}>
          <h4>
            RU <BiChevronDown />
          </h4> 
        </div>
      </div>
    </div>
  )
}

export default Navbar