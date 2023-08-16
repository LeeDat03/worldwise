import styles from "./HomePage.module.css";
import NavBar from "./NavBar";

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
        <button className="btn btn--green">Start tracking now</button>
      </section>
    </div>
  );
}

export default HomePage;
