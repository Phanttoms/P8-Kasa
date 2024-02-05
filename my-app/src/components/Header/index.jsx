import { Link, NavLink } from "react-router-dom";
import "../../styles/header.scss";
import logo from "../../assets/logos/logoKasa.svg";

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={logo} alt="Logo Kasa" />
			</Link>
			<nav className="header__navbar">
				<NavLink className="header__navbar--link" to="/">
					Accueil
				</NavLink>
				<NavLink className="header__navbar--link" to="/about">
					À propos
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
