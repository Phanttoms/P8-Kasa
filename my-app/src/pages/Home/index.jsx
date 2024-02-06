import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Data from "../../datas/data.json";
import banner from "../../assets/images/bannerImage.png";
import "../../styles/card.scss";

function Home() {
	return (
		<>
			<Banner image={banner} title="Chez vous, partout et ailleurs" />
			<section className="container">
				<article className="container__box">
					{Data.map((logement) => (
						<Card key={logement.id} data={logement} />
					))}
				</article>
			</section>
		</>
	);
}

export default Home;
