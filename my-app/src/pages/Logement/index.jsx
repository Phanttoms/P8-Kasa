import { useParams } from "react-router-dom";
import Data from "../../datas/data.json";
import Error from "../../pages/Error";
import Carousel from "../../components/Carousel";

function Logement() {
	const { id } = useParams();
	const getApartement = Data.find((apart) => {
		return apart.id === id;
	});

	if (getApartement === undefined) {
		return <Error />;
	}

	return (
		<>
			<Carousel pictures={getApartement.pictures} />
			<div>TEST</div>
		</>
	);
}

export default Logement;
