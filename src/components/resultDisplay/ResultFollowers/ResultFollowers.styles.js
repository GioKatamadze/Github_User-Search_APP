import styled from "styled-components";

const StyledResultFollowers = styled.div`
  background-color: ${(props) =>
    props.isdark === "true" ? "#141d2f" : "#F6F8FF"};
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 20px;

  h2 {
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#4B6A9B")};
  }

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    margin-top: 8px;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#2B3442")};
  }

  @media only screen and (min-width: 700px) {
    justify-content: space-around;

    h2 {
      font-size: 13px;
      line-height: 19px;
      text-align: left;
    }

    p {
      font-size: 22px;
      line-height: 33px;
      text-align: left;
    }
  }
`;

export default StyledResultFollowers;
