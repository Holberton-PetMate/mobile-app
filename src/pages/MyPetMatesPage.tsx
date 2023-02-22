import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import RoundedButton from "../components/RoundedButton";
import "../styles/pages/MyPetMates.css";
import FeedersApi, { FeederProps } from "../lib/Feeder";
import { useHistory } from "react-router";

const MyPetMatesPage: React.FC = () => {
	const [feeders, setFeeders] = useState<FeederProps[]>([]);
	const history = useHistory();

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
				<RoundedButton onClick={() => history.push({ pathname:"/wizard"})} />
			</div>
		</Layout >
	);
};

export default MyPetMatesPage;
