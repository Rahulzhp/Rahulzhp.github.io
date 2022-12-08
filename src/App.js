
import './App.css';
import Navbar from "./Pages/Navbar";
import Allroutes from "./compont/Allroutes";
import {Box,Text} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Allroutes/>
          
        </div>
    </div>
  );
}

export default App;
