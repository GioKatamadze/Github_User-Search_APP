import StyledForm from "./SearchBar.styles.js";
import { isDarkValue } from "../header/Header.js";
import Icon from "./icon-search.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar(props) {
  const [isError, setIsError] = useState(false);

  function searchUser() {
    let user = document.getElementById("userName").value;
    props.setUserName(user);
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        let response = await axios.get(
          `https://api.github.com/users/${props.userName}`
        );
        props.setData(response.data);
        setIsError(false);
      } catch (eror) {
        if (eror.response.status === 404) {
          setIsError(true);
        }
      }
    };
    fetch();
  }, [props.userName]);

  return (
    <div className="searchBarWrapper">
      <StyledForm isdark={isDarkValue}>
        <label>
          <img src={Icon} />
          <input
            defaultValue={props.userName}
            id="userName"
            placeholder="Search GitHub username…"
            className="inputBar"
            type="text"
            name="name"
            onChange={searchUser}
          />
        </label>
        <input
          onSubmit={searchUser}
          className="inputSubmit"
          type="submit"
          value="Submit"
        />
      </StyledForm>
    </div>
  );
}

export { SearchBar };
