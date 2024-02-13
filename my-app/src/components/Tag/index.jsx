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
