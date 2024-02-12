import Banner from "../../components/Banner";
import banner from "../../assets/images/bannerImage2.png";
import Collapse from "../../components/Collapse";
import { useState, useEffect } from "react";

function About() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await import("../../datas/dataAbout.json");

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
			<Banner image={banner} />
			<article className="container">
				{data &&
					data.map((collapse) => (
						<Collapse
							key={collapse.id}
							title={collapse.title}
							description={collapse.description}
						/>
					))}
			</article>
		</>
	);
}

export default About;
