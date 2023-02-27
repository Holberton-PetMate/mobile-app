import "../styles/components/loader.css";

const Spinner = () => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

const Loader = () => {
	return (
		<div className="loaderContainer" onClick={(e) => e.stopPropagation()}>
			<Spinner />
		</div>
	);
};

export default Loader;