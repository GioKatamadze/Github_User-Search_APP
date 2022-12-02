import styled from "styled-components";

const StyledResultTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  .desktopDate,
  .desktopNames {
    display: none;
  }

  .profilePicture {
    width: 70px;
    height: 70px;
    margin-right: 5vw;
  }

  .profilePicture img {
    border: none;
    border-radius: 100%;
  }

  .mobileNames {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .mobileNames h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#2B3442")};
  }

  .mobileNames p {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    color: #0079ff;
  }

  .date {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    margin-top: 5px;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#697C9A")};
  }

  @media only screen and (min-width: 700px) {
    width: auto;
    justify-content: flex-start;
    align-items: flex-start;

    .profilePicture {
      width: 115px;
      height: 115px;
    }

    .mobileNames h2 {
      font-size: 26px;
      line-height: 39px;
      color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#2B3442")};
    }

    .mobileNames p {
      font-size: 16px;
      line-height: 24px;
    }

    .date {
      font-size: 15px;
      line-height: 22px;
      margin-top: 0;
      color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#697C9A")};
    }
  }

  @media only screen and (min-width: 800px) {
    justify-content: space-between;
    align-items: flex-start;

    .profilePicture {
      display: none;
    }

    .mobileNames {
      display: none;
    }
    .desktopDate,
    .desktopNames {
      display: block;
    }

    .desktopNames h2 {
      font-size: 26px;
      line-height: 39px;
      color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#2B3442")};
    }

    .desktopNames p {
      font-size: 16px;
      line-height: 24px;
      color: #0079ff;
    }

    .desktopDate {
      font-size: 15px;
      line-height: 22px;
      margin-top: 5px;
      color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#697C9A")};
    }
  }
`;

export default StyledResultTop;
