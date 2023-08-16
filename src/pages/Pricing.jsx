import NavBar from "./NavBar";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={styles.pricing}>
      <NavBar />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Vitae vel labore mollitia iusto. Recusandae quos provident,
            laboriosam fugit voluptatem iste.
          </p>
        </div>
        <img src="/img-2.jpg" alt="Image 1" className="flicker" />
      </section>
    </div>
  );
}

export default Pricing;
