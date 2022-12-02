import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 60px;
  background-color: ${(props) =>
    props.isdark === "true" ? "rgb(30, 42, 71)" : "#FEFEFE"};
  border-radius: 15px;
  padding: 0 7px;
  box-shadow: ${(props) =>
    props.isdark === "true"
      ? "none"
      : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"};

  &:hover,
  input:hover,
  img:hover {
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    transform: translateY(4px);
  }

  .inputBar {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    height: 45px;
    width: 48vw;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#222731")};
    background-color: ${(props) =>
      props.isdark === "true" ? "rgb(30, 42, 71)" : "#FEFEFE"};
    border: none;
  }

  @media only screen and (max-width: 390px) {
    .inputBar {
      width: 40vw;
    }
  }

  .inputSubmit {
    height: 45px;
    width: 85px;
    background-color: #0079ff;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    transition: 0.2s;
  }
  .inputSubmit:hover {
    cursor: pointer;
    background-color: #60abff;
  }

  input:focus,
  input:active {
    background-color: ${(props) =>
      props.isdark === "true" ? "rgb(30, 42, 71)" : "#FEFEFE"};
    border: none;
    outline: none;
    cursor: pointer;
  }

  input::placeholder {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    vertical-align: middle;
    color: ${(props) => (props.isdark === "true" ? "#FFFFFF" : "#4B6A9B")};
  }

  @media only screen and (min-width: 800px) {
    height: 70px;
    padding: 0 10px;

    img {
      width: 20px;
      height: 20px;
      margin-left: 22px;
      margin-right: 25px;
    }

    .inputBar {
      width: 395px;
    }

    .inputSubmit {
      height: 50px;
      width: 105px;
      font-size: 16px;
    }

    input::placeholder {
      font-size: 18px;
    }
  }
`;

export default StyledForm;
