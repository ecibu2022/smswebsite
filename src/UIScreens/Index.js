import React from "react";
import school from "../images/school.jpg";

const Index=()=>{
    return(
        <div style={container}>
                <img style={image} src={school} alt=""></img>
                <h1 style={H1}>SMS</h1>
                <h6 style={H6}>Welcome back you have been missed!</h6>
                <form>
                    <input type="text" placeholder="Username" style={input}></input>
                    <input type="password" placeholder="Password" style={input}></input>
                    <p style={paragraph}>Forgot Password?</p>
                    <button>Login</button>
                </form>
        </div>
    );
}

export default Index;


// Styling this page
const container = {
 margin: 30,
 borderRadius: 15,
 backgroundColor: "#F2F2F2",
 height: 585,
};

const image = {
    float: "left",
    width: 640,
    height: 560,
    borderRadius: 15,
    margin: 10,
};

const H1 = {
    fontSize: 35,
    fontWeight: 600,
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: 20,
    marginBottom: -20,
    color: "#002e63",
    // color: "#0e67ff",
};

const H6 = {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 500,
};

const input = {
 width: 400,
 height: 27,
 padding: 10,
 margin: 10,
 justifyContent: "center",
};

const paragraph = {
    fontSize: 17,
    textAlign: "right",
};