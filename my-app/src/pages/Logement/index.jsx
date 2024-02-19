import { useParams } from "react-router-dom";
import Error from "../Error";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Stars from "../../components/Stars";
import Collapse from "../../components/Collapse";
import { useAPI } from "../../context/apiContext";
import "../../styles/main.scss";

function Logement() {
	const { logements } = useAPI();
	const { id } = useParams();
	const getData = logements.filter((apart) => {
		return apart.id === id;
	})[0];

	if (getData === undefined) {
		return <Error />;
	}

	return (
		<>
			<div key={getData.id}>
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
			</div>
		</>
	);
}

export default Logement;
