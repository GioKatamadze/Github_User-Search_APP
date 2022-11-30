import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 60px;
  background-color: rgb(30, 42, 71);
  border-radius: 15px;
  padding: 0 7px;

  &:hover,
  input:hover,
  img:hover {
    cursor: pointer;
  }

  .wrapper {
    max-width: 730px;
    margin-top: 35px;
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
    background-color: rgb(30, 42, 71);
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
    background-color: rgb(30, 42, 71);
    border: none;
    outline: none;
    cursor: pointer;
  }

  input::placeholder {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    vertical-align: middle;
    color: #ffffff;
  }

  @media only screen and (min-width: 768px) {
    height: 70px;
    padding: 0 10px;

    img {
      width: 20px;
      height: 20px;
      margin-left: 22px;
      margin-right: 25px;
    }

    .inputBar {
      width: 450px;
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
