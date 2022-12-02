import StyledApp from "./components/App.styles.js";
import { Header, isDarkValue } from "./components/header/Header.js";
import SearchBar from "./components/search-bar/SearchBar.js";
import ResultDisplay from "./components/resultDisplay/ResultDisplay.js";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <StyledApp isdark={isDarkValue}>
      <div className="app">
        <div className="wrapper">
          {Header()}
          {SearchBar()}
          {ResultDisplay()}
        </div>
      </div>
    </StyledApp>
  );
}

export { App };
