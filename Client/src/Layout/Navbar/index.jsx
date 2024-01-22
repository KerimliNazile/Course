import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="ImgLogo">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
            </div>
            <div className="navText">
                <h1>COURSE</h1>
            </div>
        </div>
        <div className="MainNav">
            <ul id='navi'>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Elements</li>
                <li>News</li>
                <li>Contact</li>
                <li><NavLink to={"/add"}>Add Page</NavLink></li>
                <li><i class="fa-solid fa-heart"></i></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
