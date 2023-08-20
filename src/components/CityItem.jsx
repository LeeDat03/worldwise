import styles from "./CityItem.module.css";

function formatDate(date) {
  const tempDate = new Date(date);
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return tempDate.toLocaleDateString("vn-VN", option);
}

function CityItem({ city }) {
  const { cityName, date, emoji } = city;

  return (
    <li className={`${styles.cityitem}`}>
      <span>
        <img src={emoji} />
      </span>
      <h4>{cityName} </h4>

      <p>({formatDate(date)})</p>
      <button>&times;</button>
    </li>
  );
}

export default CityItem;
