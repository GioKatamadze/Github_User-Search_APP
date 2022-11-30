import {
  StyledResultDisplay,
  StyledResultTop,
  StyledResultBio,
  StyledResultFollowers,
  StyledResultLinks,
} from "./ResultDisplay.styles.js";
import ProfilePicture from "./profile-picture.png";
import Location from "./icon-location.svg";
import Company from "./icon-company.svg";
import Twitter from "./icon-twitter.svg";
import Website from "./icon-website.svg";

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

          <StyledResultLinks>
            <div className="linksBox">
              <div className="linkItem">
                <img src={Location} alt="icon" />
                <p>San Francisco</p>
              </div>
              <div className="linkItem">
                <img src={Website} alt="icon" />
                <p>https://github.blog</p>
              </div>
            </div>
            <div className="linksBox">
              <div className="linkItem">
                <img src={Twitter} alt="icon" />
                <p>Not Available</p>
              </div>
              <div className="linkItem">
                <img src={Company} alt="icon" />
                <p>@github</p>
              </div>
            </div>
          </StyledResultLinks>
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

            <StyledResultLinks>
              <div className="linksBox">
                <div className="linkItem">
                  <img src={Location} alt="icon" />
                  <p>San Francisco</p>
                </div>
                <div className="linkItem">
                  <img src={Website} alt="icon" />
                  <p>https://github.blog</p>
                </div>
              </div>
              <div className="linksBox">
                <div className="linkItem">
                  <img src={Twitter} alt="icon" />
                  <p>Not Available</p>
                </div>
                <div className="linkItem">
                  <img src={Company} alt="icon" />
                  <p>@github</p>
                </div>
              </div>
            </StyledResultLinks>
          </div>
        </div>
      </StyledResultDisplay>
    </>
  );
}

export default ResultDisplay;
