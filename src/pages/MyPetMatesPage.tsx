import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import ModalCard from "../components/ModalCard";
import CreatePetMateForm from "../components/CreatePetMateForm";
import RoundedButton from "../components/RoundedButton";
import "../styles/pages/MyPetMates.css";

const MyPetMatesPage: React.FC = () => {
	const [name, setName] = useState<string | null>(null);
	const [petMateId, setPetMateId] = useState<string | null>(null);
	const [food, setFood] = useState<string | null>(null);
	const [createModalState, setCreateModalState] = useState<boolean>(false);

	const onSubmit = () => {
		console.log({
			name,
			petMateId,
			food
		})
	}
	return (
		<Layout>
			<PageHeading title="My PetMates" />
			<PetMateList />
			<div className="roundedButtonContainer">
				<RoundedButton onClick={() => setCreateModalState(true)} />
			</div>
			<ModalCard
				isActive={createModalState}
				action="create"
				title="New PetMate"
				onSubmit={onSubmit}
				closeModal={() => setCreateModalState(false)}
				style={{ minHeight: "600px" }}
			>
				<CreatePetMateForm
					setName={setName}
					setPetMateId={setPetMateId}
					setFood={setFood}
				/>
			</ModalCard>
		</Layout>
	);
};

export default MyPetMatesPage;
