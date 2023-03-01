import { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import PetMateList from "../components/PetMateList";
import RoundedButton from "../components/RoundedButton";
import "../styles/pages/MyPetMates.css";
import FeedersApi, { FeederProps } from "../lib/Feeder";
import { useHistory } from "react-router";
import Loader from "../components/Loader";

const MyPetMatesPage: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const history = useHistory();

	const [feeders, setFeeders] = useState<FeederProps[]>([]);

	useEffect(() => {
		if (history.location.pathname === "/my-petmates")
			getFeeders();
	}, [history.location.pathname])

	const getFeeders = async () => {
		try {
			setLoading(true);
			const response = await FeedersApi.getFeeders()
			setFeeders(response.data as FeederProps[])
			setLoading(false);
		} catch (err: any) {
			setLoading(false);
			console.log(err);
		}
	}
	return (
		<>
			{loading && <Loader />}
			<Layout>
				<PageHeading title="My PetMates" />
				<PetMateList feeders={feeders} />
				<div className="roundedButtonContainer">
					<RoundedButton onClick={() => history.push({ pathname: "/wizard" })} />
				</div>
			</Layout >
		</>
	);
};

export default MyPetMatesPage;
