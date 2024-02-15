import { Link } from "react-router-dom";
import "../Card/_card.scss";

/**
 * Permet d'afficher une carte contenant la Photo, le Titre et un Id pour un logement
 * @param {Object} data - Information pour l'id, le titre et la photo de couverture
 * @return Une carte
 */

function Card({ data }) {
	const { id, title, cover } = data;
	return (
		<Link to={`/apartment/${id}`} className="card">
			<img src={cover} alt={title} className="card__img" />
			<div className="card__gradient"></div>
			<h2 className="card__title">{title}</h2>
		</Link>
	);
}

export default Card;
