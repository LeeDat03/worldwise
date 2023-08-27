import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

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
  const { currentCity, deleteCity } = useCities();
  const { cityName, date, emoji, id, position } = city;

  function handleDeleteCity(e) {
    e.preventDefault();

    deleteCity(id);
  }

  return (
    <Link to={`${id}?lat=${position?.lat}&lng=${position?.lng}`}>
      <li
        className={`${styles.cityitem} ${
          id === currentCity?.id ? styles.cityItemActive : ""
        }`}
      >
        <span>
          <img src={emoji} />
        </span>
        <h4>{cityName} </h4>

        <p>({formatDate(date)})</p>
        <button onClick={handleDeleteCity}>&times;</button>
      </li>
    </Link>
  );
}

export default CityItem;
