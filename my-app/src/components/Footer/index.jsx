import logo from "../../assets/logos/logoKasaWhite.png";

function Footer() {
	return (
		<footer className="footer">
			<img className="footer__logo" src={logo} alt="Logo Kasa" />
			<p className="footer__txt">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
