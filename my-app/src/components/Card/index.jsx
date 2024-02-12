import { Link } from "react-router-dom";

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
