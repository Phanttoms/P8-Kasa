import emptyStar from "../../assets/icones/emptyStar.svg";
import fullStar from "../../assets/icones/fullStar.svg";
import "../Stars/_stars.scss";

/**
 * Permet d'afficher le bon nombre d'étoiles
 * @param {{rating: number}} rating - La note de l'hôte
 * @return {JSX.Element} Le nombre d'étoiles pleines et vide en fonction du paramétre passé
 */
function Stars({ rating }) {
	const allStars = [1, 2, 3, 4, 5];
	return (
		<div className="stars__container">
			{allStars.map((stars) =>
				rating >= stars ? (
					<img
						key={stars.toString()}
						src={fullStar}
						alt="etoile pleine"
						className="stars__container--star"
					/>
				) : (
					<img
						key={stars.toString()}
						src={emptyStar}
						alt="etoile vide"
						className="stars__container--star"
					/>
				)
			)}
		</div>
	);
}

export default Stars;
