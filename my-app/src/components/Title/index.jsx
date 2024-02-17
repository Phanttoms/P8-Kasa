import "../Title/_title.scss";

/**
 * Permet de creer le titre et la location de l'apartement
 * @param {{title: string, location: string}}
 * @returns {JSX.Element} du HTML
 */
function Title({ title, location }) {
	return (
		<>
			<div className="logement__title">
				<h2 className="logement__title--title">{title}</h2>
				<p className="logement__title--txt">{location}</p>
			</div>
		</>
	);
}

export default Title;
