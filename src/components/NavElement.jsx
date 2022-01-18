import { NavLink } from "react-router-dom";
import "../_styles/nav_element.css";

export default function NavElement({ title, url }) {
  return (
    <NavLink className="nav_element__link" to={url}>
      {title}
    </NavLink>
  );
}
