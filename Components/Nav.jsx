"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Nav = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuStyle = {
    width: isOpen ? '60%' : '0',
    transition: 'width 0.3s ease',
  };

  return (
    <>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container-fluid cmpad">
          <div className="headmain">
            <div className="logocol">
              <a href="/">

              <img src="/assets/logo/logo.svg" alt="" />
              </a>
            </div>
            <div className="menucol">
              <div className="menulist">
              <Link href="/events">Events</Link>
                <a href="">Courses</a>
                <a href="/service">Services</a>
                <Link href="/about">About</Link>
              </div>

            </div>

            <div className="menu" onClick={toggleMenu}>
              <img src="/assets/icons/menu.svg" alt="" />
            </div>

            <div className="mobmenu" style={menuStyle}>
              {/* Close button */}
              <a className="close-btn" onClick={toggleMenu}>
                <img src="/assets/icons/close.svg" alt="" />
              </a>
              <ul>
                <Link onClick={()=>setIsOpen(false)} href="/events"><li>Events</li></Link>
                <Link onClick={()=>setIsOpen(false)} href=""><li>Courses</li></Link>
                <Link onClick={()=>setIsOpen(false)} href="/service"><li>Services</li></Link>
                <Link onClick={()=>setIsOpen(false)} href=""><li>About</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
