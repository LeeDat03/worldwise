import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import NavBar from "./NavBar";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <NavBar />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to="app">
          <Button type="btn--green">Start tracking now</Button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
