import Banner from "../../components/Banner";
import banner from "../../assets/images/bannerImage2.png";
import Collapse from "../../components/Collapse";
import { useAPI } from "../../context/apiContext";

function About() {
	const { about } = useAPI();

	return (
		<>
			<Banner image={banner} />
			<article className="container-collapse">
				{about &&
					about.map((collapse) => (
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
