import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  h1 {
    font-family: Space Mono;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#222731")};
  }
`;

const StyledThemeChanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  p {
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#000000")};
    margin-right: "16px";
  }

  .imgDiv {
    width: 20px;
    height: 20px;
  }

  .imgDiv img {
    filter: ${(props) =>
      props.isdark === "true"
        ? "#FFFFFF"
        : "brightness(0) saturate(100%) invert(9%) sepia(3%) saturate(7055%) hue-rotate(183deg) brightness(8%) contrast(83%)"};
  }

  &:hover {
    cursor: pointer;
  }
`;

export { StyledHeader, StyledThemeChanger };
