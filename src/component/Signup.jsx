import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

const mystyle = {
    backgroundColor: "white",
    color: "black",
    padding: "40px",
    paddingBottom: "5px",
    marginTop: "10px",
    height: "80%",
    width: "40vw",
    borderRadius: "40px",
    marginBottom: "20px",
    fontFamily: "cursive",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
};

const btnSign = {
    textTransform: "none",
    background: "#686868",
    color: "#fff",
    borderRadius: "15px",
    height: "40%",
    width: "7vw",
    fontFamily: "cursive",
};

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLogin] = useState(true);
    const [flag, setFlag] = useState(false);


    function dataSubmit(e) {
        e.preventDefault()

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem('name', JSON.stringify(name));
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('password', JSON.stringify(password));

            setLogin(!login);

        }
    };

 


    return (
        <>
            <center>
                {login ? <form onSubmit={dataSubmit}>
                    <div className="container" style={mystyle}>
                        <div>
                            <h1>User Registration</h1>
                        </div>
                        <hr />
                        <div className="col-md-8" >
                            <label htmlFor="exampleFormControlInput1" className="form-label">EnterName</label>
                            <input type="text" style={{ borderRadius: 10 }} className="form-control" onChange={(e) => setName(e.target.value)} id="name" placeholder="name" required />
                        </div>
                        <br />
                        <div className="col-md-8" >
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Email</label>
                            <input type="email" style={{ borderRadius: 10 }} className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="email" required />
                        </div>
                        <br />
                        <div className="col-md-8" >
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" style={{ borderRadius: 10 }} className="form-control" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="password" required />
                        </div>
                        <br />

                        <button style={btnSign} >Register</button>

                        {flag && <Alert color='primary' variant="warning">
                            I got it you are in hurry! But every field is important!
                        </Alert>}

                    </div>
                </form>
                    : <Login />}
            </center>
        </>
    )
}


export default Register;