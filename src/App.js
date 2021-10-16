import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/Search';
import Map from './Components/Map';

import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Map />
    </div>
  );
}

export default App;
