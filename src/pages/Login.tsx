import { useHistory, useParams } from "react-router";
import { H1 } from "../components/fonts";
import "../styles/pages/Login.css";
import { useEffect } from "react";
import React from "react";
import { IonPage } from "@ionic/react";

const Login: React.FC = () => {
	const history = useHistory();
	const params = useParams() as any;


	return (
		<IonPage>
		<div className="loginContainer">
			<img className="petmateLogo" src="/assets/blue.png" alt="capybara" />
			<div className="formContainer">
				<H1>PetMate</H1>

				<div className="loginTitleContainer">
					<p className="firstTitle">Log in</p>
					<p className="secondTitle">Sign in to continue</p>
				</div>

				<div className="userEmailContainer">
					<p>Email</p>
					<input type="text" />
				</div>

				<div className="userPasswordContainer">
					<p>Password</p>
					<i className="passwordIcon"></i>
					<input type="password" />
				</div>

				<p className="forgotPassword">Forgot password?</p>

				<div className="loginButtonContainer">
					<button className="loginButton" onClick={() => history.push("/my-petmates")}>Log In
					</button>
				</div>

				<div className="registrateContainer">
					<p className="notMemberTitle">Not a member?</p>
					<p className="registerTitle">Register now</p>
				</div>
			</div>
		</div>
		</IonPage>
	);
};

export default Login;
