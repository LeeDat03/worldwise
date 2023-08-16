import NavBar from "./NavBar";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.product}>
      <NavBar />

      <section>
        <img src="/img-1.jpg" alt="Image 1" className="shake" />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Vitae vel labore mollitia iusto. Recusandae quos provident,
            laboriosam fugit voluptatem iste.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Product;
