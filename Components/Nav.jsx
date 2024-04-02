"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../public/assets/icons/logo.svg";
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
   
      <div className= {scrolled ? "scrolledHead cmpad fixed top-0 w-full z-10 " :"container-fluid cmpad"}>
        <div className="headmain">
          <div class="logocol">
            <Link href="">
              <img src="assets/images/Logo-01 2.svg" alt="Edukraft" />
            </Link>
          </div>
          <div className="responav">
            <button>

          <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            </button>
          </div>

          
          <div className="menu-col">
            <Link href="/">
              <h4>Events</h4>
            </Link>
            <Link href="/">
              <h4>Courses</h4>
            </Link>
            <Link href="/">
              <h4>Countries</h4>
            </Link>
            <Link href="/">
              <h4>About</h4>
            </Link>
          </div>
        </div>
      </div>
          
    </>
  );
};

export default Nav;
