import Banner from "../../components/Banner";
import Card from "../../components/Card";
import banner from "../../assets/images/bannerImage.png";
import { useAPI } from "../../context/apiContext";
import Error from "../../components/ErrorPage";
import Loader from "../../components/Loader";

function Home() {
	const { logements, isError, isLoading } = useAPI();

	if (isLoading) {
		return <Loader />;
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
