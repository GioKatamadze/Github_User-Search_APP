import StyledResultBio from "./ResultBio.styles.js";
import { isDarkValue } from "../../header/Header.js";

function ResultBio(props) {
  return (
    <StyledResultBio isdark={isDarkValue}>
      {props.data.bio != null ? props.data.bio : "This profile has no bio"}
    </StyledResultBio>
  );
}

export default ResultBio;
