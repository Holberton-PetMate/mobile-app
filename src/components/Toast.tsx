import { useEffect } from "react";
import { useToastContext } from "../hooks/useToast";

import { P } from "./fonts";
import { CheckCircle, Times } from "./Icons";
import "../styles/components/toast.css";

const Toast = () => {
	const { toastData, resetToast } = useToastContext();

	useEffect(() => {
		let timer = setTimeout(() => { }, 3000);

		if (toastData.isActive) {
			timer = setTimeout(() => resetToast(), 3000);
		}

		return () => {
			clearTimeout(timer);
		};
	}, [toastData.isActive, toastData.message, toastData.status, resetToast]);

	return toastData.isActive ? (
		<div className="toastContainer">
			<div className={`toast ${toastData.status}`}>
				<div className="textContainer">
					<CheckCircle color="white" style={{ marginRight: "0.5rem" }} />
					<P dark>{toastData.message}</P>
				</div>
				<Times
					color="white"
					style={{ cursor: "pointer" }}
					onClick={() => resetToast()}
				/>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Toast;
