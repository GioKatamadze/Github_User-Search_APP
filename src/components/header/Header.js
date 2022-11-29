import { StyledHeader, StyledColorChangeDiv } from "./Header.styles.js";
import themeIcon from "./icon-sun.svg";

function Header() {
  return (
    <div className="wrapper">
      <StyledHeader>
        <h1>devfinder</h1>
        <StyledColorChangeDiv>
          <p>LIGHT</p>
          <div style={{ width: "20px", height: "20px" }}>
            <img
              style={{ marginLeft: "16px" }}
              src={themeIcon}
              alt="sun icon"
            />
          </div>
        </StyledColorChangeDiv>
      </StyledHeader>
    </div>
  );
}

export default Header;
