import React from "react";
import {connect} from "react-redux";


class Reactjs extends React.Component{
    // we have to create componentDidMount function becase of we fetach the emidiate loading
    componentDidMount(){
        this.props.getReactjsData();
    };
    render(){
        return(
            <div>
                {JSON.stringify(this.props.msg)}
            </div>
        )
    }
};

// receives the response from reducer by state
const receive = (state) =>{
    return{
        msg:state
    }
}


// sends the request to actions by dispatch
const send = (dispatch)=>{
    return{
        getReactjsData : ()=>{dispatch({type:"REACTJS_ACTION",value:{}})}
    }
}
export default connect(send,receive)(Reactjs);