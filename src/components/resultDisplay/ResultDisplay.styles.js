import styled from "styled-components";

const StyledResultDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 35px 24px 50px 24px;
  background-color: ${(props) =>
    props.isdark === "true" ? "rgb(30, 42, 71)" : "#FEFEFE"};
  height: auto;
  border-radius: 15px;
  margin-top: 16px;
  margin-bottom: 80px;
  box-shadow: ${(props) =>
    props.isdark === "true"
      ? "none"
      : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"};

  .desktopLayout {
    display: none;
  }

  @media only screen and (min-width: 800px) {
    align-items: flex-start;
    padding: 40px;

    .mobileLayout {
      display: none;
    }

    .desktopLayout {
      display: flex;
    }

    .desktopProfilePicture {
      width: 115px;
      height: 115px;
    }

    .desktopProfilePicture img {
      border: none;
      border-radius: 100%;
    }

    .profileinfo {
      width: 75%;
      padding-left: 37px;
    }
  }
`;

export default StyledResultDisplay;
