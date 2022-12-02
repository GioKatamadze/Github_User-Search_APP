import styled from "styled-components";

const StyledApp = styled.div`
  background-color: ${(props) =>
    props.isdark === "true" ? "#141D2F" : "#f2f2f2"};
`;

export default StyledApp;
