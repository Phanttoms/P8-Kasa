function Stars({ rating }) {
	const allStars = [1, 2, 3, 4, 5];
	return (
		<div>
			{allStars.map((stars) =>
				rating >= stars ? (
					<img key={stars.toString()} src="yolo" alt="etoile pleine" />
				) : (
					<img key={stars.toString()} src="yolo2" alt="etoile vide" />
				)
			)}
		</div>
	);
}

export default Stars;
