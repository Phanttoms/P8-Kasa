import { Link } from "react-router-dom";
import "../../styles/error.scss";

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
