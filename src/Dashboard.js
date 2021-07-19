import React from "react";
import Angular from "./Angular";
import Reactjs from "./Reactjs";
import Nodejs from "./Nodejs";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
// import Route from "react-router-dom/Route";



class Dashboard extends React.Component{
    logout = () => {
        this.history.push("/");
    }
    render(){
        return(
            <div>
                <Router>
                    <NavLink path="/angular" activeStyle={{color:"red"}} exact strict> Anguar </NavLink>
                    <NavLink path="/reactjs" activeStyle={{color:"red"}} exact strict> Reactjs </NavLink>
                    <NavLink path="/nodejs" activeStyle={{color:"red"}} exact strict> Nodejs </NavLink>
                    <button onClick={this.logout}>Logout</button>

                    < Route path="/angular" exact strict Component={Angular} />
                    < Route path="/reactjs" exact strict Component={Reactjs} />
                    < Route path="/nodejs" exact strict Component={Nodejs} />
                </Router>
            </div>
        )
    }
};

export default Dashboard;