import './reset.css';
import './App.css';
import themeIcon from './assets/icon-sun.svg'


function App() {
  return (
    <div className="App">
      
      <div className='wrapper' >

        <div className='header' >
          <h1>devfinder</h1>
          <div className='colorChanger' >
            <p>LIGHT</p>
            <div className='colorChangerIcon' > <img src={themeIcon} alt="sun icon" /> </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
