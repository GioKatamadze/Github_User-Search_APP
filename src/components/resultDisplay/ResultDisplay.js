import {
  StyledResultDisplay,
  StyledResultTop,
} from "./ResultDisplay.styles.js";
import ProfilePicture from "./profile-picture.png";

function ResultDisplay() {
  return (
    <>
      <StyledResultDisplay>
        <StyledResultTop>
          <div className="profilePicture">
            <img src={ProfilePicture} />
          </div>

          <div className="mobileNames">
            <h2>The Octocat</h2>
            <p>@octocat</p>
            <div className="date">Joined 25 Jan 2011</div>
          </div>

          <div className="desktopNames">
            <h2>The Octocat</h2>
            <p>@octocat</p>
          </div>

          <div className="desktopDate">Joined 25 Jan 2011</div>
        </StyledResultTop>
      </StyledResultDisplay>
    </>
  );
}

export default ResultDisplay;
