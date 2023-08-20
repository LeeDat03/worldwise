import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import Button from "../components/Button";

function PageNotFound() {
  return (
    <section className={styles.page_404}>
      <div className="page_404--img"></div>

      <h1>404</h1>
      <p>
        <span>Look like you&apos;re lost</span> <br />
        the page you are looking not avaible!
      </p>
      <Link to="/">
        <Button type="btn--green">Go to Home</Button>
      </Link>
    </section>
  );
}

export default PageNotFound;
