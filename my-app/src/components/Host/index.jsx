function Host({ host }) {
	return (
		<div className="logement__host">
			<p className="logement__host--txt">{host.name}</p>
			<img src={host.picture} alt="Host" className="logement__host--img" />
		</div>
	);
}

export default Host;
