import { PropsWithoutRef } from "react";
import "../styles/components/petMateCard.css";
import { Body } from "./fonts";
import { EditMain } from "./Icons";

interface PetMateCardProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	name: string;
	image: string
}

const PetMateCard = ({ name, image, ...rest }:PetMateCardProps) => {
	return (
		<div className="petMateCard" {...rest}>
			<div className="leftContainer">
				<img src="/assets/blue.png" alt="" />
				<Body>{name}</Body>
			</div>
			<div className="toolsContainer">
				<EditMain></EditMain>
			</div>
		</div>
	);
};

export default PetMateCard;