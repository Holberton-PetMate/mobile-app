import { PropsWithoutRef } from "react";
import "../styles/components/petMateCard.css";
import { Body } from "./fonts";
import { Edit } from "./Icons";

interface PetMateCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	name: string;
	image: string
}

const PetMateCard = ({name, image, ...rest}:PetMateCardProps) => {
	return (
		<div className="petMateCard" {...rest}>
			<div className="leftContainer">
				<img src="/assets/black-logo.png" alt="" />
				<Body style={{fontFamily: "Quicksand", fontWeight: 600}}>{name}</Body>
			</div>
			<div className="toolsContainer">
				<Edit></Edit>
			</div>
		</div>
	);
};

export default PetMateCard;