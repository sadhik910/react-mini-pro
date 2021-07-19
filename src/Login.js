import React from "react";
import {connect} from "react-redux";


class Login extends React.Component{
    render(){
        return(
            <div>
                <fieldset>
                    <legend>
                        Login
                    </legend>
                    <input type="text" ref="uname" placeholder="Enter UserName" /> <br/><br/>
                    <input type="password" ref="upwd" placeholder="Enter UserPassword" /> <br/><br/>
                    <button onClick={()=>{this.props.login({"uname":this.refs.uname.value,
                                                            "upwd":this.refs.upwd.value})}}>Login</button>
                </fieldset>
            </div>
        );
    }
}


// it will receive the data to the reducer by state in state level have logindetails token
const receive = (state) => {
    console.log("Result.....",state);
};

// its sends the value to action
const send = (dispatch) => {
    return{
        // login function takes the "uname" & "upwd" and stores in obj,
        // the dispatch is moves the data to action.js
        login : (obj)=> {dispatch({type:"LOGIN_ACTION",value:obj})}
    }
}

export default connect(receive,send)(Login);