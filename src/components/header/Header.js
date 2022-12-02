import { StyledHeader, StyledThemeChanger } from "./Header.styles.js";
import { useState } from "react";
import iconSun from "./icon-sun.svg";
import iconMoon from "./icon-moon.svg";

let isDarkValue = "true";
let icon = iconSun;
let iconText = "LIGHT";

function Header() {
  const [DarkValue, setDarkValue] = useState("true");

  function ThemeChanger() {
    if (DarkValue === "false") {
      return (
        setDarkValue("true"),
        (isDarkValue = "true"),
        (icon = iconSun),
        (iconText = "LIGHT")
      );
    } else {
      return (
        setDarkValue("false"),
        (isDarkValue = "false"),
        (icon = iconMoon),
        (iconText = "DARK")
      );
    }
  }

  return (
    <StyledHeader isdark={isDarkValue}>
      <h1>devfinder</h1>
      <StyledThemeChanger
        isdark={isDarkValue}
        onClick={() => {
          ThemeChanger();
        }}
      >
        <p isdark={isDarkValue} style={{ marginRight: "16px" }}>
          {iconText}
        </p>
        <div className="imgDiv">
          <img src={icon} alt="icon" />
        </div>
      </StyledThemeChanger>
    </StyledHeader>
  );
}

export { Header, isDarkValue };
