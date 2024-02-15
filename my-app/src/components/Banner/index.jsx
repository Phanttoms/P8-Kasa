import "../Banner/_banner.scss";

/**
 * Permet la création de banière contenant une image et un titre
 * @param {{image: URL, title: string}}
 * @return Le HTML de la banière
 */

function Banner({ image, title }) {
	return (
		<div className="banner">
			<img className="banner__img" src={image} alt="Bannière du site Kasa" />
			{!title ? "" : <h1 className="banner__txt">{title}</h1>}
		</div>
	);
}

export default Banner;
