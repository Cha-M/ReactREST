import { useState } from "react";
import { createUser, login } from "../../utils";

// export const Login = (props) => {
    //destructuring props object
// export const Login = ({handler, nameSetter, emailSetter, passSetter, boolSetter, bool}) => {
export const Login = ({setUser}) => {
    
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);
  //a state and a setter
  //usestate accepts an initial value

  const submitHandler = (e) => {
    e.preventDefault();
    // setUser({ username });
    // if (email && email.includes("@")) {
    //   // setUser({username: username, email: email, pass: pass});
    //   createUser(username, email, pass, setUser);
    // }
    // else {}
    if (bool) {
      login(username, pass, setUser);
    }
    else if (email && email.includes("@")) {
      createUser(username, email, pass, setUser)
    }
  };
  
    return (
        <>


            {/* <h1>user = {user}</h1>
            <h2>username = {username}</h2> */}
            {/* //basic dynamic rendering */}
            {/* <form onSubmit={(event) => {event.preventDefault(); setUser(username)}}> */}
            {/* <form onSubmit={props.handler}> */}
            <form onSubmit={submitHandler}>
                <input
                onChange = {(event) => setUsername(event.target.value)}
                placeholder="Username">

                </input>

                {!bool && (
                <input onChange = {(event) => setEmail(event.target.value)}
                placeholder="Email">
                </input>)}

                <input
                onChange = {(event) => setPass(event.target.value)}
                placeholder="Password">

                </input>

                <button type="submit">Submit</button>
            </form>
            <button onClick={() => setBool(!bool)}>Login/Signup</button>
        </>
    )
}