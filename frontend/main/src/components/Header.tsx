import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
      <div className="leftH">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

      </div>
      <div className="rightH">
        <Link to="/about" className="h-link">
          <div className="headerItem">About</div>
        </Link>

        <Link to="/partnership" className="h-link">
          <div className="headerItem">Become a Partner</div>
        </Link>
        <Link to="/whitepaper" className="h-link">
          <div className="headerItem">Whitepaper</div>
        </Link>
        <Link to="/vote" className="h-link">
          <div className="headerItem">Vote</div>
        </Link>
        <Link to="/contact" className="h-link">
          <div className="headerItem">Contact</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
