import React, { useState, useRef, useEffect } from "react";
import styles from "./menu.module.css"; // Assuming you have appropriate styles defined

function SidebarMenu({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.menuIcon} onClick={toggleSidebar}>
        &#9776; {/* Menu icon */}
      </div>

      {isOpen && (
        <div ref={sidebarRef} className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <button className={styles.closeIcon} onClick={toggleSidebar}>
              &times; {/* Close icon */}
            </button>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {links?.map(
                (link) =>
                  link.name &&
                  link.url && (
                    <li key={link.name}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SidebarMenu;
