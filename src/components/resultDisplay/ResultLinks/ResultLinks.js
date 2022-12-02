import Location from "../icons/icon-location.svg";
import Company from "../icons/icon-company.svg";
import Twitter from "../icons/icon-twitter.svg";
import Website from "../icons/icon-website.svg";

function ResultFollowers() {
  return (
    <>
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
    </>
  );
}

export default ResultFollowers;
