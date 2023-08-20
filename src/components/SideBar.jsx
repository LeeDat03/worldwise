import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import Footer from "./Footer";

function SideBar() {
  return (
    <section className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>

      <AppNav />

      <Outlet />

      <Footer />
    </section>
  );
}

export default SideBar;
