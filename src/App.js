import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Enquiry from './components/Enquiry';
function App() {
  return (
    <Router>
    <div className="App">
      hiii this is home page
     <Route exact path="/login"component={Login}/>
     <Route exact path="/Enquiry" component={Enquiry}/>
    </div>
    </Router>
  );
}

export default App;
