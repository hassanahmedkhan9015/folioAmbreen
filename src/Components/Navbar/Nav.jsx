import React, { useState } from 'react';
import Home from '../../assets/Images/home.svg'
import Profile from '../../assets/Images/profile.svg'
import Portfolio from '../../assets/Images/portfolio.svg'
import Mail from '../../assets/Images/mail.svg'
import './Nav.css'
import { NavLink } from 'react-router-dom';



function Nav() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
           
            <nav className="position-fixed end-0 top-50 translate-middle-y d-lg-block d-none m-auto">
                <ul className="nav flex-column responsive">
                    <li className='nav-item mb-3'>
                        <NavLink to="/" className='btn rounded-circle nav-btns ' activeClassName='active-btn'>
                            <img src={Home} alt="" srcSet="" className='w-100 ' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-3'>
                        <NavLink to="/about" className='btn rounded-circle nav-btns nav-btns-mob' activeClassName='active-btn'>
                            <img src={Profile} alt="" srcSet="" className='w-100 ' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-3'>
                        <NavLink to="/portfolio" className='btn rounded-circle nav-btns nav-btns-mob' activeClassName='active-btn'>
                            <img src={Portfolio} alt="" srcSet="" className='w-100 ' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-3'>
                        <NavLink to="/contact" className='btn rounded-circle nav-btns nav-btns-mob' activeClassName='active-btn'>
                            <img src={Mail} alt="" srcSet="" className='w-100 ' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
           

            {/* Mobile sidebar for screens less than 900px */}

            <nav className="d-lg-none fixed-bottom text-center add-border bg-white">
                <ul className="nav d-flex justify-content-around position-sticky nav-bg-mob">
                    <li className='nav-item mb-2 mt-2'>
                        <NavLink to="/" className='btn rounded-circle nav-btns-mob' activeClassName='active-btn'>
                            <img src={Home} alt="" srcSet="" className='w-100' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-2 mt-2'>
                        <NavLink to="/about" className='btn rounded-circle nav-btns-mob' activeClassName='active-btn'>
                            <img src={Profile} alt="" srcSet="" className='w-100' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-2 mt-2'>
                        <NavLink to="/portfolio" className='btn rounded-circle nav-btns-mob' activeClassName='active-btn'>
                            <img src={Portfolio} alt="" srcSet="" className='w-100' />
                        </NavLink>
                    </li>
                    <li className='nav-item mb-2 mt-2'>
                        <NavLink to="/contact" className='btn rounded-circle nav-btns-mob' activeClassName='active-btn'>
                            <img src={Mail} alt="" srcSet="" className='w-100' />
                        </NavLink>
                    </li>
                </ul>
            </nav>




        </>
    );



}

export default Nav;
