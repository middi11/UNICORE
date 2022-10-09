import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'
import { connect } from 'react-redux'
import './components.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Navbar = ({ logout, isAuthenticated }) => {

  const [loading, setLoading] = useState(false)
  const [sidebar, setSidebar] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false)
  const [currentPage, setCurrentPage] = useState(currentPage)
  const [dropAcc, setDropAcc] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);
  const activeNav = () => setActiveMenu(!activeMenu)
  const showDropAcc = () => setDropAcc(!dropAcc)


  const handleLogout = (e) => {
    setLoading(true)
    logout()
    setCurrentPage()
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }

  const onClickMenu = (item) => {
    // activeNav()
    setCurrentPage(item)
  }

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      path: "/farmer",
      name: "Farmer Details",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
    {
      path: "/plantprogress",
      name: "Plant Progress",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
    {
      path: "/repository",
      name: "Repostiory",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
    {
      path: "/report",
      name: "Report",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
    {
      path: "/summary",
      name: "Summary",
      cName: 'nav-text',
      icon: <IoIcons.IoMdPeople />,
    },
  ]

  console.log(currentPage)

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
        <div className='navbar d-flex border-bottom  border-4'>
          <span to='#' className='menu-bars-mobile'>
            <FaIcons.FaBars onClick={showSidebar} className="text-dark" />
          </span>
          <div className='mx-5 d-flex justify-content-around w-75'>
            <h3 className=''>{currentPage === undefined ? "Home" : currentPage}</h3>
            <div className='d-flex justify-content-around account-drop p-1'>
              <div className='d-flex align-items-center'>
                <AiIcons.AiFillBell className='text-primary w-100' />
              </div>
              <div>
                <div className='d-flex flex-column' onClick={showDropAcc}>
                  <span className='fw-bold'>User Name</span>
                  <span>test@gmail.com</span>
                  <div className={dropAcc === true ? "shadow-lg p-3 mb-5 bg-white rounded dropdown-account-active" : "dropdown-account"}>
                    <ul>
                      <li>
                        <Link to='/account'>
                          <span>My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/' onClick={e => handleLogout(e)}>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={showSidebar}>
              <span to='#' className='menu-bars text-center'>
                <FaIcons.FaBars />
              </span>
            </li>
            <li className='logo-img'>
              <h3 className='text-light'>Logo</h3>
            </li>
            {menuItem.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} text-light`}>
                  <NavLink to={item.path} onClick={() => onClickMenu(item.name)} className={activeMenu ? "active-menu" : null}>
                    {item.icon}
                    <span className={sidebar ? 'menu-item-text' : 'text-none'}>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
            {/* <li className='nav-text text-light'>
              <Link to='/' onClick={e => handleLogout(e)}>
                <AiIcons.AiOutlineClose />
                <span className={sidebar ? 'menu-item-text' : 'text-none'}>Logout</span>
              </Link>
            </li> */}
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