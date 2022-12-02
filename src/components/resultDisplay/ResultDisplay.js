import ResultTop from "./ResultTop/ResultTop.js";
import ResultBio from "./ResultBio/ResultBio.js";
import ResultFollowers from "./ResultFollowers/ResultFollowers.js";
import ResultLinks from "./ResultLinks/ResultLinks.js";

import StyledResultTop from "./ResultTop/ResultTop.styles.js";
import StyledResultBio from "./ResultBio/ResultBio.styles.js";
import StyledResultFollowers from "./ResultFollowers/ResultFollowers.styles.js";
import StyledResultLinks from "./ResultLinks/ResultLinks.styles.js";
import StyledResultDisplay from "./ResultDisplay.styles.js";

import { isDarkValue } from "../header/Header.js";
import ProfilePicture from "./profile-picture.png";

function ResultDisplay() {
  return (
    <>
      <StyledResultDisplay isdark={isDarkValue}>
        <div className="mobileLayout">
          <StyledResultTop isdark={isDarkValue}>{ResultTop()}</StyledResultTop>
          <StyledResultBio isdark={isDarkValue}>{ResultBio()}</StyledResultBio>
          <StyledResultFollowers isdark={isDarkValue}>
            {ResultFollowers()}
          </StyledResultFollowers>
          <StyledResultLinks isdark={isDarkValue}>
            {ResultLinks()}
          </StyledResultLinks>
        </div>

        <div className="desktopLayout">
          <div className="desktopProfilePicture">
            <img src={ProfilePicture} />
          </div>

          <div className="profileinfo">
            <StyledResultTop isdark={isDarkValue}>
              {ResultTop()}
            </StyledResultTop>
            <StyledResultBio isdark={isDarkValue}>
              {ResultBio()}
            </StyledResultBio>
            <StyledResultFollowers isdark={isDarkValue}>
              {ResultFollowers()}
            </StyledResultFollowers>
            <StyledResultLinks isdark={isDarkValue}>
              {ResultLinks()}
            </StyledResultLinks>
          </div>
        </div>
      </StyledResultDisplay>
    </>
  );
}

export default ResultDisplay;
