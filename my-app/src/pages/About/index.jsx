import Banner from "../../components/Banner";
import banner from "../../assets/images/bannerImage2.png";
import Collapse from "../../components/Collapse";
import dataAbout from "../../datas/dataAbout.json";

function About() {
	return (
		<>
			<Banner image={banner} />
			<article className="container">
				{dataAbout.map((collapse) => (
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
