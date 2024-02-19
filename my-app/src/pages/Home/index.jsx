import Banner from "../../components/Banner";
import Card from "../../components/Card";
import banner from "../../assets/images/bannerImage.png";
import { useAPI } from "../../context/apiContext";
import Error from "../../components/ErrorPage";

function Home() {
	const { logements, isError, isLoading } = useAPI();
	// console.log(logements)

	if (isLoading) {
		// tu peux créer un composant spinner pour le chargement
		return <p>En chargement...</p>;
	}

	if (isError) {
		return <Error />;
	}

	return (
		<>
			<Banner image={banner} title="Chez vous, partout et ailleurs" />
			<section className="container">
				<article className="container__box">
					{logements !== undefined &&
						logements.map((logement) => (
							<Card key={logement.id} data={logement} />
						))}
				</article>
			</section>
		</>
	);
}

export default Home;
