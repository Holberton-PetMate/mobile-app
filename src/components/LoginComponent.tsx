import { H1 } from "./fonts";
import "../styles/pages/Login.css";
import { Dispatch, PropsWithoutRef } from "react";

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <>
      <div className="loginContainer">
        <img className="petmateLogo" src="/assets/blue.png" alt="capybara" />
        <div className="formContainer">
          <H1>PetMate</H1>
		  
		  <div className="loginTitleContainer">
		  	<p className="firstTitle">Log In</p>
		  	<p className="secondTitle">Sign in to continue</p>
		  </div>

          <div className="userEmailContainer">
            <p>Email</p>
            <input type="userEmail" />
          </div>

          <div className="userPasswordContainer">
            <p>Password</p>
			<i className="passwordIcon"></i>
			<input type="userPassword" />
          </div>

		  <p className="forgotPassword">Forgot password?</p>

		  <div className="loginButtonContainer">
			<button className="loginButton">Log In
			</button>
		  </div>

        </div>
      </div>
    </>
  );
};

export default Login;
