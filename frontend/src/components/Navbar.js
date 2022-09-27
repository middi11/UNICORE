import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'
import { connect } from 'react-redux'
import './components.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';

const Navbar = ({ logout, isAuthenticated }) => {

  const [loading, setLoading] = useState(false)
  const [sidebar, setSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);
  const activeNav = () => setActiveMenu(!activeMenu)

  const handleLogout = (e) => {
    setLoading(true)
    logout()
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      path: "/account",
      name: "Profile",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
  ]

  const guestLinks = () => (
    <Fragment>
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/account">Account</Link>
      </li>
    </Fragment>
  )

  // const authLinks = () => (
  //   <nav class="navbar navbar-expand-lg bg-light">
  //     <div class="container-fluid">
  //       <Link class="navbar-brand" to="/">TEST</Link>
  //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  //         <span class="navbar-toggler-icon"></span>
  //       </button>
  //       <div class="collapse navbar-collapse" id="navbarText">
  //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li class="nav-item">
  //             <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
  //           </li>
  //           <li class="nav-item">
  //             <Link class="nav-link" to="/account">Account</Link>
  //           </li>
  //           <li class="nav-item">
  //             <Link class="nav-link" aria-current="page" to="/" onClick={e => handleLogout(e)}>Logout</Link>
  //           </li>
  //         </ul>
  //         <span class="navbar-text">
  //           Navbar text with an inline element
  //         </span>
  //       </div>
  //     </div>
  //   </nav>
  // )

  const authLinks = () => (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars text-center'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              <h3 className='text-light'>Logo</h3>
            </li>
            {menuItem.map((item, index) => {
              return (
                <li key={index} className={ `${item.cName} text-light`}>
                  <NavLink to={item.path} activeClassName={activeMenu ? "active-menu" : null}>
                    {item.icon}
                    <span className={sidebar ? 'menu-item-text' : 'text-none'}>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
            <li className='nav-text text-light'>
              <Link to='/' onClick={e => handleLogout(e)}>
                <AiIcons.AiOutlineClose />
                <span className={sidebar ? 'menu-item-text' : 'text-none'}>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )

  return (
    <>
      {
        loading ? (
          <div className="text-center loading-screen">
            <div className='spinner-main-custom' >
              <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        ) : null
      }
      {isAuthenticated ? authLinks() : null}
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar)