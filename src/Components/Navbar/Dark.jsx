import React, { useState } from 'react';
// import lightmode from '../../assets/Images/brightness.svg';
// import darkmode from '../../assets/Images/moon.svg';
import sun from '../../assets/Images/sun.svg'
import moon from '../../assets/Images/dark.svg'
import './Dark.css'; // Import your CSS file

function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Toggle dark mode class on the body element
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`d-flex justify-content-end my-2 mx-2 `}>
      <button
        className={`mx-2 btn btn-mode`} // Apply the transition class
        onClick={toggleDarkMode}
      >
        <img
          src={darkMode ? moon : sun }
          alt="Dark Mode"
          className={`icon `}
        />
      </button>
    </div>
  );
}

export default Dark;
