import { isDarkValue } from "../../header/Header.js";
import StyledResultTop from "./ResultTop.styles.js";

function ResultTop(props) {
  let date = props.data.created_at;
  let year = date[0] + date[1] + date[2] + date[3];
  let month = date[5] + date[6];
  let day = date[8] + date[9];
  const months = [
    0,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let ProfilePicture = props.data.avatar_url;
  let userName = props.data.login;
  return (
    <StyledResultTop isdark={isDarkValue}>
      <div className="profilePicture">
        <img src={ProfilePicture} />
      </div>

      <div className="mobileNames">
        <h2>{userName}</h2>
        <p>@{userName}</p>
        <div className="date">
          Joined {day} {months[Number(month)]} {year}{" "}
        </div>
      </div>

      <div className="desktopNames">
        <h2>{userName}</h2>
        <p>@{userName}</p>
      </div>

      <div className="desktopDate">
        Joined {day} {months[Number(month)]} {year}{" "}
      </div>
    </StyledResultTop>
  );
}

export default ResultTop;
