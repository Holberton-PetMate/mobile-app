import { PropsWithoutRef } from "react";
import PetMateCard from "./PetMateCard";
import { useHistory } from "react-router";
import "../styles/components/petMateList.css";
import { FeederProps } from "../lib/Feeder";

interface PetMateListProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
	feeders: FeederProps[]
}

const PetMateList = ({ feeders }: PetMateListProps) => {
	const history = useHistory();
	return (
		<div className="petMateList">
			{feeders.map(item => (
				<PetMateCard
					name={item.name}
					// image={item.image}
					key={item.name}
					onClick={() => history.push(`/dashboard/${item.id}/progress`)}
				/>
			))}
		</div>
	);
};

export default PetMateList;