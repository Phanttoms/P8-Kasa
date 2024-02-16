import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Logement from "../../pages/Logement";

/**
 * Permet d'afficher automatiquement la bonne page en fonction de l'url
 * @returns {JSX.Element} Les pages corespondant à leur chemin
 */

function RoutesPath() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/apartment/:id" element={<Logement />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default RoutesPath;
