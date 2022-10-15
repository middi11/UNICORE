import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'
import { connect } from 'react-redux'
import './components.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Navbar = ({ logout, isAuthenticated, role }) => {

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
      icon: <FaIcons.FaChartPie />,
      cName: 'nav-text'
    },
    {
      path: "/farmer",
      name: "Block Owner",
      cName: 'nav-text',
      icon: <IoIcons5.IoPersonCircleSharp />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      cName: 'nav-text',
      icon: <RiIcons.RiFileList3Fill />,
    },
    {
      path: "/plantprogress",
      name: "Plant Progress",
      cName: 'nav-text',
      icon: <RiIcons.RiPlantFill />,
    },
    {
      path: "/repository",
      name: "Repository",
      cName: 'nav-text',
      icon: <RiIcons.RiArticleFill />,
    },
    {
      path: "/summary",
      name: "Summary",
      cName: 'nav-text',
      icon: <HiIcons.HiPresentationChartBar />,
    },
  ]

  const menuItemManager = [
    {
      path: "/home",
      name: "Home",
      icon: <FaIcons.FaChartPie />,
      cName: 'nav-text'
    },
    {
      path: "/farmer",
      name: "Block Owner",
      cName: 'nav-text',
      icon: <IoIcons5.IoPersonCircleSharp />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      cName: 'nav-text',
      icon: <RiIcons.RiFileList3Fill />,
    },
    {
      path: "/plantprogress",
      name: "Plant Progress",
      cName: 'nav-text',
      icon: <RiIcons.RiPlantFill />,
    },
    {
      path: "/repository",
      name: "Repository",
      cName: 'nav-text',
      icon: <RiIcons.RiArticleFill />,
    },
    {
      path: "/report",
      name: "Report",
      cName: 'nav-text',
      icon: <IoIcons5.IoBarChartSharp />,
    },
    {
      path: "/summary",
      name: "Summary",
      cName: 'nav-text',
      icon: <HiIcons.HiPresentationChartBar />,
    },
  ]

  const authLinks = () => (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar d-flex border-bottom border-4'>
          <span to='#' className='menu-bars-mobile'>
            <FaIcons.FaBars onClick={showSidebar} className="text-dark" />
          </span>
          <div className='mx-5-lg d-flex justify-content-around w-75'>
            <h3 className=''>{currentPage === undefined ? "Home" : currentPage}</h3>
            <div className='d-flex justify-content-around account-drop p-1'>
              <div className='d-flex flex-column' onClick={showDropAcc}>
                <div className='d-flex'>
                  <div className='d-flex align-items-center'>
                    <AiIcons.AiFillBell className='text-primary w-100' />
                  </div>
                  <div className='d-flex flex-column'>
                    <span className='fw-bold'>User Name</span>
                    <span>test@gmail.com</span>
                  </div>
                </div>
                <div className={dropAcc === true ? "shadow-lg bg-white rounded dropdown-account-active d-flex justify-content-center px-3 py-1" : "dropdown-account"}>
                  <ul className='dropdown-account-drop-ul'>
                    <li className='dropdown-account-drop'>
                      <Link to='/account'>
                        My Profile
                      </Link>
                    </li>
                    <li className='dropdown-account-drop'>
                      <Link to='/' onClick={e => handleLogout(e)}>
                        Logout
                      </Link>
                    </li>
                  </ul>
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
            <li className="w-100 d-flex justify-content-center my-2">
              <img src="/static/images/unicore_logo.png" alt="" width="40" className={sidebar ? null : "logo-img"} />
            </li>
            {menuItem.map((item, index) => {
              return (
                <li key={index} className={sidebar ? `${item.cName} text-light d-flex justify-content-center` : `${item.cName} text-light close-sidebar-icon`}>
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
            <li className='footer-img-nav pb-2'>
              <div className='d-flex justify-content-center'>
                <img src="static/images/Picture1.png" alt="" className='w-25' />
                <img src="static/images/bernas-nasioanal-logo-EB1FE7BD5C-seeklogo.com.png" alt="" className='w-25' />
              </div>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )

  const authLinksManager = () => (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar d-flex border-bottom border-4'>
          <span to='#' className='menu-bars-mobile'>
            <FaIcons.FaBars onClick={showSidebar} className="text-dark" />
          </span>
          <div className='mx-5-lg d-flex justify-content-around w-75'>
            <h3 className=''>{currentPage === undefined ? "Home" : currentPage}</h3>
            <div className='d-flex justify-content-around account-drop p-1'>
              <div className='d-flex flex-column' onClick={showDropAcc}>
                <div className='d-flex'>
                  <div className='d-flex align-items-center'>
                    <AiIcons.AiFillBell className='text-primary w-100' />
                  </div>
                  <div className='d-flex flex-column'>
                    <span className='fw-bold'>User Name</span>
                    <span>test@gmail.com</span>
                  </div>
                </div>
                <div className={dropAcc === true ? "shadow-lg bg-white rounded dropdown-account-active d-flex justify-content-center px-3 py-1" : "dropdown-account"}>
                  <ul className='dropdown-account-drop-ul'>
                    <li className='dropdown-account-drop'>
                      <Link to='/account'>
                        My Profile
                      </Link>
                    </li>
                    <li className='dropdown-account-drop'>
                      <Link to='/' onClick={e => handleLogout(e)}>
                        Logout
                      </Link>
                    </li>
                  </ul>
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
            <li className="w-100 d-flex justify-content-center my-2">
              <img src="/static/images/unicore_logo.png" alt="" width="40" className={sidebar ? null : "logo-img"} />
            </li>
            {menuItemManager.map((item, index) => {
              return (
                <li key={index} className={sidebar ? `${item.cName} text-light d-flex justify-content-center` : `${item.cName} text-light close-sidebar-icon`}>
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
            <li className='footer-img-nav pb-2'>
              <div className='d-flex justify-content-center'>
                <img src="static/images/Picture1.png" alt="" className='w-25' />
                <img src="static/images/bernas-nasioanal-logo-EB1FE7BD5C-seeklogo.com.png" alt="" className='w-25' />
              </div>
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
      {isAuthenticated && role === "Clerk" ? authLinks() : isAuthenticated && role == "Manager" ? authLinksManager() : null}
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.profile.role
})

export default connect(mapStateToProps, { logout })(Navbar)