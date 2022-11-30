import {
  StyledResultDisplay,
  StyledResultTop,
  StyledResultBio,
  StyledResultFollowers,
} from "./ResultDisplay.styles.js";
import ProfilePicture from "./profile-picture.png";

function ResultDisplay() {
  return (
    <>
      <StyledResultDisplay>
        <div className="mobileLayout">
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

          <StyledResultBio>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </StyledResultBio>

          <StyledResultFollowers>
            <div className="Repos">
              <h2>Repos</h2>
              <p>8</p>
            </div>
            <div className="Repos">
              <h2>Followers</h2>
              <p>3938</p>
            </div>
            <div className="Repos">
              <h2>Following</h2>
              <p>9</p>
            </div>
          </StyledResultFollowers>
        </div>

        {/*  */}

        <div className="desktopLayout">
          <div className="desktopProfilePicture">
            <img src={ProfilePicture} />
          </div>

          <div className="profileinfo">
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

            <StyledResultBio>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </StyledResultBio>

            <StyledResultFollowers>
              <div className="Repos">
                <h2>Repos</h2>
                <p>8</p>
              </div>
              <div className="Repos">
                <h2>Followers</h2>
                <p>3938</p>
              </div>
              <div className="Repos">
                <h2>Following</h2>
                <p>9</p>
              </div>
            </StyledResultFollowers>
          </div>
        </div>
      </StyledResultDisplay>
    </>
  );
}

export default ResultDisplay;
