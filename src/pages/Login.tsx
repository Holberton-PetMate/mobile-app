import { ValidationErrors } from 'final-form';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import { H1, Small } from '../components/fonts';
import LabeledTextField from '../components/LabeledTextField';
import LoginComponent from '../components/LoginComponent';
import { useSessionContext } from '../hooks/useSession';
import { useToastContext } from '../hooks/useToast';
import Users from '../lib/User';
import '../styles/pages/Login.css';
import Toast from '../components/Toast';

const Login: React.FC = () => {
	return (
		<LoginComponent />
	);
};

export default Login;
