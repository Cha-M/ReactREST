import { useState, useEffect } from "react";
import { Login } from "./components/login";
import { Home } from "./components/home";
import './App.css';
import { tokenLogin } from "./utils";

const App = () => {
  // const [user, setUser] = useState("Default User String");
  // const [username, setUsername] = useState("Default Username String");

  const [user, setUser] = useState();
  
  useEffect(() => {
    tokenLogin(setUser);
  },[]);
  // },[user]);//on user change

  return (
    <div className="App">
      {/* {user && <h1>{user.username}</h1>}
      {user ? <h1>{user.username}</h1> : <h1>Please type...</h1>} */}
      {user && <h1>{user}</h1>}
      {user ? <h1>{user}</h1> : <h1>Please type...</h1>}

      {
        !user ? <Login setUser={setUser} /> : <Home />
      }
    </div>
  );
}

export default App;
