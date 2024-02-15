import logo from "../../assets/logos/logoKasaWhite.png";
import "../Footer/_footer.scss";

/**
 * Permet d'afficher une banderole contenant un logo et du text en bas de page
 * @returns Le HTML du Footer
 */

function Footer() {
	return (
		<footer className="footer">
			<img className="footer__logo" src={logo} alt="Logo Kasa" />
			<p className="footer__txt">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
