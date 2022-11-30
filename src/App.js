import Header from "./components/header/Header.js";
import SearchBar from "./components/search-bar/SearchBar.js";
import ResultDisplay from "./components/resultDisplay/ResultDisplay.js";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {Header()}
        {SearchBar()}
        {ResultDisplay()}
      </div>
    </div>
  );
}

export default App;
