// reducer takes the actions from action.js
// its has initial state empty obj
const reducer =(state={},action)=>{
    // switch can takes the action type from action.js
    switch(action.type){
        // case is action type "LOGIN" its takes from action.js
        case "LOGIN":
            return{
                ...state,
                // its create the state level login key and action.values meains logindata and token
                login : action.value
            }
            break;
             // case is action type "LOGIN" its takes from action.js
        case "REACTJS":
            return{
                ...state,
                // its create the state level login key and action.values meains logindata and token
                login : action.value
            }
            break;
             // case is action type "LOGIN" its takes from action.js
        case "NODEJS":
            return{
                ...state,
                // its create the state level login key and action.values meains logindata and token
                login : action.value
            }
            break;
    };
    // it will sends to this data to the login.js component
    return state;
};
export default reducer;