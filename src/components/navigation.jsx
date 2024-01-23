import './navigation.Module.css';
import React, { useState } from 'react'; // Import useState hook

const Navigation = () => {
  const [backgroundColor, setBackgroundColor] = useState(); // Define state within the component

  const handleClick = () => {
    setBackgroundColor(backgroundColor === 'white' ? 'grey' : 'white');
  };

  return (
    <div>
     <body style={{ backgroundColor }}>
      <nav className="nav-bar">
        <div className="logo">
          <img src="./image/brand_logo.png" alt="Brand logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Career</li>
          <div className="mode" style={{ backgroundColor }}>
            <button onClick={handleClick}>Change Color</button>
          </div>
        </ul>
      </nav>
      </body>
    </div>
  );
};

export default Navigation;
