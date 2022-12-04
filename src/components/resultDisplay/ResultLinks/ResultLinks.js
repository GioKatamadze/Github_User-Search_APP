import StyledResultLinks from "./ResultLinks.styles.js";
import { isDarkValue } from "../../header/Header.js";

import Location from "../icons/icon-location.svg";
import Company from "../icons/icon-company.svg";
import Twitter from "../icons/icon-twitter.svg";
import Website from "../icons/icon-website.svg";

function ResultLinks(props) {
  return (
    <StyledResultLinks isdark={isDarkValue}>
      <div className="linksBox">
        <div className="linkItem">
          <img src={Location} alt="icon" />
          {props.data.location != null ? (
            <h3>{props.data.location}</h3>
          ) : (
            <p>Not Available</p>
          )}
        </div>
        <div className="linkItem">
          <img src={Website} alt="icon" />
          {props.data.html_url != null ? (
            <a href={props.data.html_url}>Github</a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
      </div>
      <div className="linksBox" id="2">
        <div className="linkItem">
          <img src={Twitter} alt="icon" />
          {props.data.twitter_username != null ? (
            <a href={props.data.twitter_username}>Twitter</a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
        <div className="linkItem">
          <img src={Company} alt="icon" />
          {props.data.company != null ? (
            <a href={props.data.company}>Company</a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
      </div>
    </StyledResultLinks>
  );
}

export default ResultLinks;
