import styled from "styled-components";

const StyledResultBio = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 30px;
  color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#4B6A9B")};

  @media only screen and (min-width: 700px) {
    font-size: 15px;
    line-height: 25px;
    margin-top: 24px;
  }
`;

export default StyledResultBio;
