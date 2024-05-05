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
              <img src="/assets/logo/logo.svg" alt="" />
            </div>
            <div className="menucol">
              <div className="menulist">
                <a href="">Events</a>
                <a href="">Courses</a>
                <a href="">Countries</a>
                <a href="">About</a>
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
                <li>Events</li>
                <li>Courses</li>
                <li>Countruies</li>
                <li>About</li>
              </ul>
            </div>

          </div>
        </div>
      </header>

    </>
  );
};

export default Nav;
