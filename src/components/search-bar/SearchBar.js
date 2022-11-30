import StyledForm from "./SearchBar.styles.js";
import Icon from "./icon-search.svg";

function SearchBar() {
  return (
    <div className="searchBarWrapper">
      <StyledForm>
        <label>
          <img src={Icon} />
          <input
            placeholder="Search GitHub username…"
            className="inputBar"
            type="text"
            name="name"
          />
        </label>
        <input className="inputSubmit" type="submit" value="Submit" />
      </StyledForm>
    </div>
  );
}

export default SearchBar;
