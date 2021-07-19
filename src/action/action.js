import axios from "axios";
import { call,takeLatest,put } from "@redux-saga/core/effects";
import { Redirect } from "react-router-dom";
// import history from "./history";

// login_call function is calling generater login function with action.value("uname"&"upwd")
// login_call data==("uname"&"upwd") sends the server by post request its varify and retuns the data
// after return data is sends to generater function login
function login_call(data){
    return axios.post("http://localhost:8080/login",data);
};


// login generater function call by main_fun
// login function have loginvalues("uname"&"upwd") action
// login is calls the another function login_call have action.value("uname"&"upwd") fllow of execution we use "call" key 
function* login(action){
    // after server varification its takes the data to login_call function and stores in res
    const res = yield call(login_call,action.value);
    // we can varifing the data by if condition 
    if(res.data.login === "success"){
        // in data login success have it stores that values in localstorage by string type
        window.localStorage.setItem("login_details",JSON.stringify(res.data));
        yield Redirect("/dashboard");
    }else{console.log("error")
    }
    // its sends the data=(res.data) to reducer by "put"
    yield put({type: "LOGIN",value:res.data})
}


function angular_call(){
    let str = window.localStorage.getItem("login_details");
    let obj = JSON.parse(str);
    return axios.get("http://localhost:8080/angular",{headers:{token:obj.token}});

};

function* angular(action){
    const res =yield call(angular_call,action.value);
    yield put({type:"ANGULAR",value:res.data});

};

function nodejs_call(){
    let str = window.localStorage.getItem("login_details");
    let obj = JSON.parse(str);
    return axios.get("http://localhost:8080/node",{headers:{token:obj.token}});

};

function* nodejs(action){
    const res =yield call(nodejs_call,action.value);
    yield put({type:"NODEJS",value:res.data});

};

function* reactjs(action){
    const res =yield call(reactjs_call,action.value);
    yield put({type:"REACTJS",value:res.data});

};

function reactjs_call(){
    let str = window.localStorage.getItem("login_details");
    let obj = JSON.parse(str);
    return axios.get("http://localhost:8080/react",{headers:{token:obj.token}});

};






// the generater funstion takes the data to the login.js by dispatch
// takeLatest is used to by mistake we click the login button multiple times it will takes the last click data
// it calls another function is login
export function* main_fun(){
    yield takeLatest("LOGIN_ACTION",login)
    yield takeLatest("ANGULAR_ACTION",angular)
    yield takeLatest("REACTJS_ACTION",reactjs)
    yield takeLatest("NODEJS_ACTION",nodejs)
};
