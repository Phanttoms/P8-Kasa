import Banner from "../../components/Banner";
import Card from "../../components/Card";
import banner from "../../assets/images/bannerImage.png";
import { useState, useEffect } from "react";

// changer le fetch
function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await import("../../datas/data.json");

				const jsonData = response.default;

				setData(jsonData);
			} catch (error) {
				console.log("Erreur:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Banner image={banner} title="Chez vous, partout et ailleurs" />
			<section className="container">
				<article className="container__box">
					{data &&
						data.map((logement) => <Card key={logement.id} data={logement} />)}
				</article>
			</section>
		</>
	);
}

export default Home;
