function Tag({ tag }) {
	return (
		<div>
			{tag.map((tag, i) => (
				<p key={i}>{tag}</p>
			))}
		</div>
	);
}

export default Tag;
