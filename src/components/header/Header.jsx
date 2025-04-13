import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'
import Offcanvas from './Offcanvas'
import StarField from '@dvlpralamin/star-field'
import { IoMenuOutline } from 'react-icons/io5'


function Header() {
  const [showcanvas, setShowCanvas] = useState(false)
  const [activeLink, setActiveLink] = useState('home');
  
  function scrollToTop() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  return (
    <>
      <div className={`${showcanvas ? 'block' : 'hidden'} bp1000:hidden z-50 bg-[#060822] fixed top-0 h-[100vh] w-[100%]`}>
        <Offcanvas setShowCanvas={setShowCanvas} />
      </div>
      <div className='fixed z-40 w-[100%] '>

        <div className='bg-[#05021a] -z-50'
          style={{
            position: "fixed",
            width: "100%",
            height: "120px"
          }}
        >
          <StarField />

        </div>
        <div className="w-full relative  text-white  "><span className='text-[#060822]'>.</span>

          <div className='flex  justify-between w-[95%]  border-[3px]  border-white bg-black m-[10px] p-[30px] rounded-3xl  h-[60px] items-center mx-[auto]'>
            {/* <div>
              <Link to={'/'} onClick={() => { scrollToTop() }} className='h-[30px]'>
                <img className='h-[50px]' src="/img/flaticons/galaxy.png" alt="" />
              </Link> 
            </div> */}
            <div>
              <ul className='text-[20px]  bp1000:flex hidden font-josefin  text-white'>
                <a
                  onClick={() => { setActiveLink('home') }}
                  href='#home' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Home</span>
                  <span className={`${activeLink == 'home' ? 'w-3/6' : 'w-0'} absolute -bottom-1  rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'home' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>
                <a
                  onClick={() => { setActiveLink('about') }}
                  href='#about' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>About</span>
                  <span className={`${activeLink == 'about' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'about' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>
                <a
                  onClick={() => { setActiveLink('education') }}
                  href='#education' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Education</span>
                  <span className={`${activeLink == 'education' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'education' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>
                <a
                  onClick={() => { setActiveLink('skills') }}
                  href='#skills' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Skills</span>
                  <span className={`${activeLink == 'skills' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'skills' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>
                <a
                  onClick={() => { setActiveLink('projects') }}
                  href='#projects' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Projects</span>
                  <span className={`${activeLink == 'projects' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'projects' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>


                <a
                  onClick={() => { setActiveLink('experience') }}
                  href='#experience' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Experience</span>
                  <span className={`${activeLink == 'experience' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'experience' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>


                <a
                  onClick={() => { setActiveLink('contact') }}
                  href='#contact' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
                  <span>Contact</span>
                  <span className={`${activeLink == 'contact' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
                  <span className={`${activeLink == 'contact' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
                </a>

              </ul>
              <div onClick={() => { setShowCanvas(!showcanvas) }} className='  rounded p-[5px] bp1000:hidden'>
                <IoMenuOutline className=' text-[2em] bp1000:hidden' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
