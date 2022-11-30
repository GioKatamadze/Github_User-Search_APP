import styled from "styled-components";

const StyledResultDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 35px 24px 50px 24px;
  background-color: #1e2a47;
  height: 300px;
  border-radius: 15px;
  margin-top: 16px;

  @media only screen and (min-width: 768px) {
    height: 300px;
    padding: 40px;
  }
`;

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
  }

  @media only screen and (min-width: 500px) {
    justify-content: flex-start;
    align-items: flex-start;

    .profilePicture {
      width: 115px;
      height: 115px;
    }

    .mobileNames h2 {
      font-size: 26px;
      line-height: 39px;
    }

    .mobileNames p {
      font-size: 16px;
      line-height: 24px;
    }

    .date {
      font-size: 15px;
      line-height: 22px;
      margin-top: 0;
    }
  }

  @media only screen and (min-width: 700px) {
    justify-content: space-between;
    align-items: flex-start;

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
    }

    .desktopNames p {
      font-size: 16px;
      line-height: 24px;
    }

    .desktopDate {
      font-size: 15px;
      line-height: 22px;
      margin-top: 5px;
    }
  }
`;

export { StyledResultDisplay, StyledResultTop };
