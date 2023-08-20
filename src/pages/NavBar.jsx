import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../components/Logo";
import Button from "../components/Button";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <Button type="btn--green">
            <NavLink to="/login">Login</NavLink>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
