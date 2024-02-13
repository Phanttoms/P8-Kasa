function Host({ host }) {
	return (
		<div>
			<p>{host.name}</p>
			<img src={host.picture} alt="Host" />
		</div>
	);
}

export default Host;
