import React, { useState, useEffect, useRef } from "react";
import styles from "./menu.module.css";
import Header from "../header/header";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar menu open and close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Header />
      <div className={styles.sidebarContainer}>
        {/* Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          &#9776; {/* Menu icon */}
        </div>

        {/* Sidebar */}
        {isOpen && (
          <div ref={sidebarRef} className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <button className={styles.closeIcon} onClick={toggleSidebar}>
                &times; {/* Close icon */}
              </button>
            </div>
            <nav className={styles.sidebarNav}>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarMenu;
