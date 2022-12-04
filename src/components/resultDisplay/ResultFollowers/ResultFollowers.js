import StyledResultFollowers from "./ResultFollowers.styles.js";
import { isDarkValue } from "../../header/Header.js";

function ResultFollowers(props) {
  return (
    <StyledResultFollowers isdark={isDarkValue}>
      <div className="Repos">
        <h2>Repos</h2>
        {
          (props.data.public_repos = !0 ? (
            <p>{props.data.public_repos}</p>
          ) : (
            <p>0</p>
          ))
        }
      </div>
      <div className="Repos">
        <h2>Followers</h2>
        {(props.data.followers = !0 ? <p>{props.data.followers}</p> : <p>0</p>)}
      </div>
      <div className="Repos">
        <h2>Following</h2>
        {(props.data.following = !0 ? <p>{props.data.following}</p> : <p>0</p>)}
      </div>
    </StyledResultFollowers>
  );
}

export default ResultFollowers;
