import React from "react";
import LOGIN from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Route from "react-router-dom/Route";

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Router>
          <Route path="/">
          <LOGIN/>
          </Route>
          <Route path="/dashboard"
        </Router> */}
      <Router>
      <Switch>
		    <Route exact path="/" component={LOGIN}/>
				<Route exact path="/dashboard" component={Dashboard}/>
	    </Switch>
      </Router>
        
        {/* <Router>
          <Route path="/" exact strict><LOGIN/></Route>
          <Route path="/dashboard" exact strict><Dashboard/></Route>
        </Router> */}
      </div>

    );
  }
}
export default App;