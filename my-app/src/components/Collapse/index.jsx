import { useState } from "react";
import arrow from "../../assets/icones/arrow.svg";

function Collapse({ title, description }) {
	const [open, setOpen] = useState(false);

	const toggleCollapse = () => {
		setOpen(!open);
	};

	return (
		<div className="collapse collapse-logement" id={`collapse-${title}`}>
			<div className="collapse__box">
				<h2 className="collapse__box--title">{title}</h2>
				<img
					src={arrow}
					alt="Icône de flèche"
					className={`collapse__box--img ${open}`}
					onClick={toggleCollapse}
				/>
			</div>
			<div className={`collapse__txt ${open}`}>
				<span className={`collapse__txt--txt ${open}`}>{description}</span>
			</div>
		</div>
	);
}

export default Collapse;
