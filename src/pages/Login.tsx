import { ValidationErrors } from 'final-form';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import { H1, Small } from '../components/fonts';
import LabeledTextField from '../components/LabeledTextField';
import Layout from '../components/Layout';
import { useSessionContext } from '../hooks/useSession';
import { useToastContext } from '../hooks/useToast';
import Users from '../lib/User';
import '../styles/pages/Login.css';
import Toast from '../components/Toast';

const Login: React.FC = () => {
	const { storeCurrentUser, storeToken } = useSessionContext();
	const { toastData, setToastData } = useToastContext();
	const router = useHistory();

	const onSubmit = async (values: any) => {
		// check if there is any validation error
		if (Object.keys(validation(values)).length === 0) {
			try {
				const { data } = await Users.login({
					email: values.email,
					password: values.password,
				});
				await storeCurrentUser({ user: data.user });
				await storeToken({ token: data.token });
				router.push("/dashboard");
			} catch (error: any) {
				setToastData({
					message: "Invalid email or password",
					status: "error",
					isActive: true,
				});
			}
		}
	};

	return (
		<Layout>
			<div className="page">
				<div className="header">
					<H1>Inicia Sesión</H1>
					<Small>Ingresa tus credenciales para acceder a tu cuenta</Small>
				</div>
				<Form
					onSubmit={() => { }}
					validate={validation}
					render={({ handleSubmit, submitting, pristine, values, error }) => (
						<form onSubmit={handleSubmit} className="form">
							<div className="formBody">
								<LabeledTextField name="email" label="Email" />
								<LabeledTextField
									name="password"
									label="Contraseña"
									type="password"
								/>
							</div>
							<Button
								style={{ marginTop: "1.5rem" }}
								text="Entrar"
								type="submit"
								onClick={() => {
									onSubmit(values);
								}}
								disabled={submitting || pristine}
							/>
						</form>
					)}
				/>
			</div>
			<Toast
				toastData={toastData}
				dismiss={() =>
					setToastData({
						message: "",
						status: "error",
						isActive: false,
					})
				}
			/>
		</Layout>
	);
};

const validation = (values: any) => {
	const errors: ValidationErrors = {};
	if (!values.email) {
		errors.email = "Required";
	} else {
		const domain = values.email.split("@")[1];
		if (!domain || !domain.includes(".")) {
			errors.email = "Invalid email format";
		}
	}
	if (!values.password) {
		errors.password = "Required";
	}
	return errors;
};

export default Login;
