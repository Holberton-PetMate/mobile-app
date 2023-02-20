import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PetMateList from '../components/PetMateList';
import RoundedButton from '../components/RoundedButton';
import '../styles/pages/MyPetMates.css';

const MyPetMatesPage: React.FC = () => {

	return (
		<Layout>
			<PageHeading title="My PetMates" />
			<PetMateList />
			<div className="roundedButtonContainer">
				<RoundedButton onClick={() => { }} />
			</div>
		</Layout >
	);
};

export default MyPetMatesPage;
