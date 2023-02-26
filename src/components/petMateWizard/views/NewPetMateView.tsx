/* eslint-disable react-hooks/exhaustive-deps */
import { H1 } from '../../fonts';
import '../../../styles/pages/createPetMateWizard.css';
import { Dispatch, PropsWithoutRef, useEffect, useState } from 'react';
import Foods, { Food } from '../../../lib/Foods';

interface AccessPointViewProps
	extends PropsWithoutRef<JSX.IntrinsicElements['div']> {
	setPetMateName: Dispatch<React.SetStateAction<string | null>>;
	setFeederFoodId: Dispatch<React.SetStateAction<number | null>>;
}

const AccessPointView = ({
	setPetMateName,
	setFeederFoodId,
}: AccessPointViewProps) => {
	const [foods, setFoods] = useState<Food[]>([]);


	useEffect(() => {
		(async () => await getFoods())();
	}, []);

	const getFoods = async () => {
		const response = await Foods.index();
		setFoods(response.data as Food[]);
		setFeederFoodId(response.data[0].id)
	}

	return (
		<>
			<img className="petmateLogo" src="/assets/orange.png" alt="capybara" />
			<div className="formContainer">
				<p>Just one more step...</p>
				<H1>Configure your new PetMate!</H1>
				<div className="petMateNameContainer">
					<p>Name</p>
					<input
						type="petMateName"
						onChange={(e) => setPetMateName(e.target.value)}
					/>
				</div>
				<div className="foodTypeContainer">
					<p>Food type</p>
					<select className="foodTypes" defaultValue={foods.length && foods[0].id}>
						{foods.map((food, i) => (
							<option key={food.id} value={food.id}>{food.name}</option>
						))}
					</select>
				</div>
			</div>
		</>
	);
};

export default AccessPointView;
