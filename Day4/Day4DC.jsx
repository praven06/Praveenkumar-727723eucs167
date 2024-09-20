import React, { useState } from "react";

const Day4DC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when any item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.menuIcon} onClick={toggleMenu}>
          &#9776; {/* This is the menu icon (hamburger) */}
        </div>
        <div style={styles.title}>NavBar</div>
        <button style={styles.loginButton}>Login</button>
      </nav>

      {menuOpen && (
        <div style={styles.dropdownMenu}>
          <ul style={styles.menuList}>
            <li style={styles.menuItem} onClick={closeMenu}>
              Home
            </li>
            <li style={styles.menuItem} onClick={closeMenu}>
              About
            </li>
            <li style={styles.menuItem} onClick={closeMenu}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px",
    color: "white",
    position: "relative",
  },
  menuIcon: {
    fontSize: "24px",
    cursor: "pointer",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    top: "50px",
    left: "10px",
    backgroundColor: "#333",
    width: "100px",
    zIndex: 1,
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    padding: "10px",
    borderBottom: "1px solid #555",
    cursor: "pointer",
    color: "white",
  },
};

export default Day4DC;
