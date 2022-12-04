import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) =>
    props.isdark === "true" ? "#141D2F" : "#F6F8FF"};

  @media only screen and (min-width: 700px) {
    align-items: center;
  }
`;

export default StyledApp;
