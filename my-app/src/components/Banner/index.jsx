import "../../styles/banner.scss";
import banner from "../../assets/images/bannerImage.png";

function Banner() {
	return (
		<div className="banner">
			<img className="banner__img" src={banner} alt="Bannière du site Kasa" />
			<h1 className="banner__txt">Chez vous, partout et ailleurs</h1>
		</div>
	);
}

export default Banner;
