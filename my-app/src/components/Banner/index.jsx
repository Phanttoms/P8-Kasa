import "../../styles/banner.scss";

function Banner({ image, title }) {
	return (
		<div className="banner">
			<img className="banner__img" src={image} alt="Bannière du site Kasa" />
			<h1 className="banner__txt">{title}</h1>
		</div>
	);
}

export default Banner;
