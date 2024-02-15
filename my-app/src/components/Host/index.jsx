/**
 * Permet d'afficher le nom et la photo de l'hôte
 * @param {Object} host - objet contenant le nom et la photo de l'hôte
 * @return Le HTML de Host
 */

function Host({ host }) {
	return (
		<div className="logement__host">
			<p className="logement__host--txt">{host.name}</p>
			<img src={host.picture} alt="Host" className="logement__host--img" />
		</div>
	);
}

export default Host;
