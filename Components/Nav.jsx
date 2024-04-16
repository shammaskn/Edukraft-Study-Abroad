"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>

      <header>
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
