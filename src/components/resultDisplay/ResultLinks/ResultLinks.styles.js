import styled from "styled-components";

const StyledResultLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .linkItem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 17px;
  }

  img {
    max-width: 20px;
    filter: ${(props) =>
      props.isdark === "true"
        ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(65deg) brightness(104%) contrast(105%);"
        : "brightness(0) saturate(100%) invert(39%) sepia(19%) saturate(1282%) hue-rotate(178deg) brightness(96%) contrast(84%)"};
  }

  p,
  a,
  h3 {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    margin-left: 20px;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#4B6A9B")};
  }

  p {
    color: ${(props) =>
      props.isdark === "true" ? "rgba(255, 255, 255, 0.5)" : "#4B6A9B"};
  }

  a {
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#4B6A9B")};
  }

  @media only screen and (min-width: 500px) {
    justify-content: space-around;
    flex-direction: row;

    img {
      max-width: 20px;
      max-height: 20px;
    }

    .linksBox {
      margin-top: 17px;
    }

    p,
    a,
    h3 {
      font-size: 15px;
      line-height: 22px;
    }
  }
`;

export default StyledResultLinks;
