import "../Tag/_tag.scss";

/**
 * Permet d'afficher les tag
 * @param {{tag: Array}} tag - Tableau contenant les tag de l'apartement
 * @returns le HTML permetant d'afficher les tag
 */

function Tag({ tag }) {
	return (
		<div className="logement__tags">
			{tag.map((tag, i) => (
				<p key={i} className="logement__tags--tag">
					{tag}
				</p>
			))}
		</div>
	);
}

export default Tag;
