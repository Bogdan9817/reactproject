import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/header/Header'
import Main from './components/main/Main'


function App() {
  
  return (
   <>
   <Router>
    <Header/>
    <Main/>
   </Router>
   </>
  );
}

export default App;
