import "./../Loader/_loader.scss";

function Loader() {
	return (
		<div className="loading">
			<div className="loading__spinner"></div>
			<p className="loading__txt">En chargement...</p>
		</div>
	);
}

export default Loader;
