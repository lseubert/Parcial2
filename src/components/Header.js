import React from "react";

const Header = ({ setComponent, setLanguage }) => {
  return (
    <header>
      <button className="logo" onClick={() => setComponent("space")}>
        SMART HOME
      </button>
      <div className="language-container">
        <button onClick={() => setLanguage("en")}>
          <svg>
            <use href="icons.svg#icon-usa" xlinkHref="icons.svg#icon-usa"></use>
          </svg>
        </button>
        <button onClick={() => setLanguage("es")}>
          <svg>
            <use
              href="icons.svg#icon-colombia"
              xlinkHref="icons.svg#icon-colombia"
            ></use>
          </svg>
        </button>
        <button onClick={() => setLanguage("de")}>
          <svg>
            <use
              href="icons.svg#icon-germany"
              xlinkHref="icons.svg#icon-germany"
            ></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
