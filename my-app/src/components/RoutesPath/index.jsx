import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Logement from "../../pages/Logement";

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
