import "./App.css";
import Citys from "./components/Citys";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "./components/Clock";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/" component={Citys}/>
          <Route path ="/:kita/:city" component={Clock}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
