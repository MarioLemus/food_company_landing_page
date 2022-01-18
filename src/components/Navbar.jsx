import "../_styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar__container">
      <div>
        <Link to="/">
          <img src="img/si-ham-logo.png" alt="si-ham-logo" />
        </Link>
      </div>
    </header>
  );
}
