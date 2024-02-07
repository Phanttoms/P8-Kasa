import { useState } from "react";
import arrow from "../../assets/icones/arrow.svg";

function Collapse({ title, description }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="collapse" id={`collapse-${title}`}>
			<div className="collapse__box">
				<h2 className="collapse__box--title">{title}</h2>
				<img
					src={arrow}
					alt="Icône de flèche"
					className={`collapse__box--img ${open}`}
					onClick={() => setOpen(!open)}
				/>
			</div>
			{open && <div className="collapse__txt">{description}</div>}
		</div>
	);
}

export default Collapse;
