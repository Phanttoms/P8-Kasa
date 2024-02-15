import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/logoKasa.svg";

/**
 * Permet d'afficher une banderole contenant un Logo et une nav bar en haut de l'ecran
 * @returns Le HTML du Header
 */

function Header() {
	return (
		<div className="header-container">
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
		</div>
	);
}

export default Header;
