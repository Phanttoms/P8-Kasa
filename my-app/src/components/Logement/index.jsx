import { useParams } from "react-router-dom";
import Data from "../../datas/data.json";
import Error from "../../pages/Error";
import Carousel from "../Carousel";
import Title from "../Title";
import Tag from "../Tag";
import Host from "../Host";
import Stars from "../Stars";

function Logement() {
	const { id } = useParams();
	const getData = Data.find((apart) => {
		return apart.id === id;
	});

	if (getData === undefined) {
		return <Error />;
	}

	return (
		<>
			<Carousel pictures={getData.pictures} />
			<div className="logement-container">
				<section className="logement">
					<article className="logement__header">
						<Title title={getData.title} location={getData.location} />
						<Tag tag={getData.tags} />
					</article>
					<article className="logement__info">
						<Host host={getData.host} />
						<Stars rating={getData.rating} />
					</article>
				</section>
				<div> Les collapses</div>
			</div>
		</>
	);
}

export default Logement;
