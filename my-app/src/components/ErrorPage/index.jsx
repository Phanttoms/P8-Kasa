import { Link } from "react-router-dom";
import "../ErrorPage/_error.scss";

/**
 * Permet d'afficher une page d'erreur 404 en cas d'adresse invalide
 * @returns Du HTML contenant un message d'erreur
 */

function Error() {
	return (
		<div className="error">
			<h1 className="error__title">404</h1>
			<p className="error__txt">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="error__return">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
