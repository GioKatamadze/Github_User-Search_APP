import Header from "./components/header/Header.js";
import SearchBar from "./components/search-bar/SearchBar.js";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {Header()}
        {SearchBar()}
      </div>
    </div>
  );
}

export default App;
