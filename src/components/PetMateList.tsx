import { PropsWithoutRef } from "react";
import PetMateCard from "./PetMateCard";
import RoundedButton from "./RoundedButton";
import { useHistory } from "react-router";
import "../styles/components/petMateList.css";

interface PetMateListProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {

}

const PetMateList = ({}:PetMateListProps) => {
	const history = useHistory();
	const petMates = [
		{
			name: "Nacho's PetMate",
			image: ""
		},
		{
			name: "Vale's PetMate",
			image: ""
		},
		{
			name: "Facu's PetMate",
			image: ""
		},
		{
			name: "Toti's PetMate",
			image: ""
		},
	]
	return (
		<div className="petMateList">
			{petMates.map(item => (
				<PetMateCard 
					name={item.name}
					image={item.image}
					key={item.name}
					onClick={() => history.push("/dashboard/1/progress")}
				/>
			))}
		    <RoundedButton />
		</div>
	);
};

export default PetMateList;