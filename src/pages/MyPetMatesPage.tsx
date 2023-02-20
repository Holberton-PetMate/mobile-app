import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import ModalCard from "../components/ModalCard";
import CreatePetMateForm from "../components/CreatePetMateForm";
import RoundedButton from "../components/RoundedButton";
import "../styles/pages/MyPetMates.css";
import FeedersApi, { FeederProps } from "../lib/Feeder";

const MyPetMatesPage: React.FC = () => {
	const [name, setName] = useState<string | null>(null);
	const [petMateId, setPetMateId] = useState<string | null>(null);
	const [food, setFood] = useState<string | null>(null);
	const [createModalState, setCreateModalState] = useState<boolean>(false);
	const [feeders, setFeeders] = useState<FeederProps[]>([]);

	useEffect(() => {
		(async () => {
			const response = await FeedersApi.getFeeders()
			console.log(response.data)
			setFeeders(response.data as FeederProps[])
		})()
	}, [])

	return (
		<Layout>
			<PageHeading title="My PetMates" />
			<PetMateList feeders={feeders} />
			<div className="roundedButtonContainer">
				<RoundedButton onClick={() => { }} />
			</div>
		</Layout >
	);
};

export default MyPetMatesPage;
