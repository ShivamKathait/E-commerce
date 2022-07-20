import { Alert } from 'react-bootstrap';
import { useState } from "react";
import Home from "./Home";


const mystyle = {
  backgroundColor: "white",
  color: "black",
  padding: "40px",
  marginTop: "15px",
  height: "70%",
  width: "40vw",
  borderRadius: "40px",
  marginBottom: "20px",
  justifyContent: "center",
  fontFamily: "cursive",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
};

const btnLog = {
  textTransform: "none",
  background: "#686868",
  color: "#fff",
  borderRadius: "15px",
  height: "40%",
  width: "6vw",
  fontFamily: "cursive",



};

const Login = () => {

  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [flag, setFlag] = useState('');
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let mail = localStorage.getItem('email').replace(/"/g, "");
    let pass = localStorage.getItem('password').replace(/"/g, "");
    //replace (/"/g,"") is used to remove the double quotes for the string

    if (!emailLog || !passwordLog) {
      setFlag(true);
      
    } else if ((passwordLog !== pass) || (emailLog !== mail)) {
      setFlag(true);

    } else {
      setHome(!home);
      setFlag(false);
    }
  }


  return (
    <>
      <center>

        {home ? <form onSubmit={handleLogin}>
          <div className="container" style={mystyle}>
            <div>
              <h1>User Login</h1>
            </div>
                 <hr/>
            <div className="col-md-8">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input type="text" className="form-control" onChange={(event) => setEmailLog(event.target.value)} id="email" placeholder="email" />
            </div>
            <br />
            <div className="col-md-8" >
              <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
              <input type="text" className="form-control" onChange={(event) => setPasswordLog(event.target.value)} id="pass" placeholder="password" />
            </div>
            <br />
            <button style={btnLog}>Login</button>
            <div className="col-md-8" >
            {flag && <Alert color='primary' variant="warning">
              Invalid email  or Password
            </Alert>}
            </div>
          </div>
        </form>
          : <Home />
        }
      </center>
    </>
  )
}


export default Login;
