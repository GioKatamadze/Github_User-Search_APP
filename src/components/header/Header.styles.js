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
  }
`;

const StyledColorChangeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export { StyledHeader, StyledColorChangeDiv };
