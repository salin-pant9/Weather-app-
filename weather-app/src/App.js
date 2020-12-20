import React,{ useState} from "react";
import SearchIcon from '@material-ui/icons/Search';

import './App.css';
const api = {
  key:'6fc49228aa0fe3891ec1c41ca3537bcb',
}



function App() {
  const [weather , setWeather] = useState('');
  const [getWeathers,setGetWeathers]=useState({});
  const search = (event) => {
    if(event.key==="Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
          setGetWeathers(result);
          setWeather('');
          
        }).catch(err => alert(err));
    }
  }
  return (
    <div className="app">
      <div className="appCard">
        <div className="searchInfo">
          <SearchIcon />
          <input value={weather} onKeyPress={search} onChange={(e) => setWeather(e.target.value)} className="search" type="text" placeholder="search" />
        </div>
        {(typeof getWeathers.main != "undefined") ?  (
        <div>
          <div className="weatherInfo">
            <div className="location"><h1>{getWeathers.name} ,{getWeathers.sys.country}</h1></div>
            
            <div className="temp"><h1>{Math.round(getWeathers.main.temp)}°C</h1></div>
            <div className="condition">{getWeathers.weather[0].description}</div>
          </div>
        </div>
        ) : ('')}
        
       
        
      </div>
    </div>
    
  );
}

export default App;
