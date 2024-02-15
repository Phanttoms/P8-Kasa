import Banner from "../../components/Banner";
import Card from "../../components/Card";
import banner from "../../assets/images/bannerImage.png";
import { useAPI } from "../../context/apiContext";

function Home() {
	const { logements } = useAPI();

	return (
		<>
			<Banner image={banner} title="Chez vous, partout et ailleurs" />
			<section className="container">
				<article className="container__box">
					{logements &&
						logements.map((logement) => (
							<Card key={logement.id} data={logement} />
						))}
				</article>
			</section>
		</>
	);
}

export default Home;
