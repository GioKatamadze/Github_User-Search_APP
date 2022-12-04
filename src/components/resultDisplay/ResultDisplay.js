import ResultTop from "./ResultTop/ResultTop.js";
import ResultBio from "./ResultBio/ResultBio.js";
import ResultFollowers from "./ResultFollowers/ResultFollowers.js";
import ResultLinks from "./ResultLinks/ResultLinks.js";
import StyledResultDisplay from "./ResultDisplay.styles.js";

import { isDarkValue } from "../header/Header.js";

function ResultDisplay(props) {
  let ProfilePicture = props.data.avatar_url;
  return (
    <>
      <StyledResultDisplay data={props.data} isdark={isDarkValue}>
        <div className="desktopProfilePicture">
          <img src={ProfilePicture} />
        </div>

        <div className="profileinfo">
          <ResultTop data={props.data} />
          <ResultBio data={props.data} />
          <ResultFollowers data={props.data} />
          <ResultLinks data={props.data} />
        </div>
      </StyledResultDisplay>
    </>
  );
}

export default ResultDisplay;
