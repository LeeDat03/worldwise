import styles from "./CountryItem.module.css";

function CountryItem({ city }) {
  const { emoji, country } = city;

  return (
    <li className={styles.countryItem}>
      <span>
        <img src={emoji} />
      </span>
      <h4>{country}</h4>
    </li>
  );
}

export default CountryItem;
