"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {

  const [scrolled, setScrolled] = useState(false);

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
          </div>
        </div>
      </header>

    </>
  );
};

export default Nav;
