import { StyledHeader, StyledColorChangeDiv } from "./Header.styles.js";
import themeIcon from "./icon-sun.svg";

function Header() {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <StyledColorChangeDiv>
        <p style={{ marginRight: "16px" }}>LIGHT</p>
        <div style={{ width: "20px", height: "20px" }}>
          <img src={themeIcon} alt="sun icon" />
        </div>
      </StyledColorChangeDiv>
    </StyledHeader>
  );
}

export default Header;
