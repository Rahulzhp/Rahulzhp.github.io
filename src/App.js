
import './App.css';
import About from "./Components/About"
import resumeData from "./resumeData";
import Header from "./Components/Header"
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About resumeData={resumeData}/>
      
    </div>
  );
}

export default App;
