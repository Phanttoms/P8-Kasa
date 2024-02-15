import { useParams } from "react-router-dom";
import Data from "../../datas/data.json";
import Error from "../../pages/Error";
import Carousel from "../Carousel";
import Title from "../Title";
import Tag from "../Tag";
import Host from "../Host";
import Stars from "../Stars";
import Collapse from "../Collapse";

/**
 *
 * @returns Le contenu de la page Logement
 */

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
			<div className="logement__container">
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
				<div className="logement__container__collapse">
					<Collapse title="Description" description={getData.description} />
					<Collapse
						title="Équipements"
						description={getData.equipments.map((equipment, i) => (
							<ul key={i}>
								<li>{equipment}</li>
							</ul>
						))}
					/>
				</div>
			</div>
		</>
	);
}

export default Logement;
