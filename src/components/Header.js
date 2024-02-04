import React, { Link } from "react";
import Button from "./Button";

function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    const section = document.querySelector(`#section-${event.target.id}`);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <header className="app-header">
      <h3>Pablo Munoz-Evers | Software Developer</h3>
      <div>
        <ul>
          <li>
            <Button
              text="About"
              sectionId="about"
              onClick={(event) => handleClick(event)}
            />
          </li>
          <li>Code</li>
          <li>Other Interests</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
