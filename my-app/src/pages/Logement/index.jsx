import { useParams } from "react-router-dom";
import Data from "../../datas/data.json";
import Error from "../../pages/Error";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Stars from "../../components/Stars";

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
			<section>
				<article>
					<Title title={getData.title} location={getData.location} />
					<Tag tag={getData.tags} />
				</article>
				<article>
					<Host host={getData.host} />
					<Stars rating={getData.rating} />
				</article>
			</section>
			<div> Les collapses</div>
		</>
	);
}

export default Logement;
