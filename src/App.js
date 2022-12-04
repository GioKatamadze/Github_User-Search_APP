import StyledApp from "./components/App.styles.js";
import { Header, isDarkValue } from "./components/header/Header.js";
import { SearchBar } from "./components/search-bar/SearchBar.js";
import ResultDisplay from "./components/resultDisplay/ResultDisplay.js";
import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("giokatamadze");
  const [data, setData] = useState({ created_at: "as" });
  return (
    <StyledApp isdark={isDarkValue}>
      <div className="wrapper">
        {Header()}
        <SearchBar
          data={data}
          setData={setData}
          userName={userName}
          setUserName={setUserName}
        />
        <ResultDisplay data={data} />
      </div>
    </StyledApp>
  );
}

export { App };
