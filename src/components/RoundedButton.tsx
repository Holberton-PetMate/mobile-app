import { PropsWithoutRef } from "react";
import { Plus } from "./Icons";
import "../styles/components/roundedButton.css";


interface RoundedButtonProps extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {

}

const RoundedButton = ({ ...rest }:RoundedButtonProps) => {
	return (
		<button
			{...rest}
			className="roundedButton"
		>
			<Plus color="#ffffff"/>
		</button>
	);
};

export default RoundedButton;