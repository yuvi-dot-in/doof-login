import { useState } from "react";
import "./App.css";
import bg from "./assets/bg.png";
import loginSVG from "./assets/Login.svg";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Container">
      <div className="Wrapper" style={wrapper}>
        <div className="Header">
          <h1 className="brand">DOOF</h1>
          <button className="test">Test</button>
        </div>
        <div className="App-body">
          <div className="login">
            <h2>Login</h2>
            <form>
              <label for="email">Name:</label>
              <br />
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input className="submit" type="submit" value="Login" />
            </form>
            <p>
              Don’t have an account yet?<a href="#"> Signup </a>
            </p>
          </div>
          <div className="illustration">
            <h2>Unlock your stuck revenue.</h2>
            <p>
              We help you unlock the true potential connect with your customers
              to understand the rights and wrongs with your product.
            </p>
            <br />
            <img className="svg" src={loginSVG} alt="Login SVG" />
          </div>
        </div>
        <div className="footer">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
const wrapper = {
  backgroundImage: `url(${bg})`,
};

export default App;
