import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Loader from "./Loader";

function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Loader />;

  if (cities.length === 0)
    return (
      <p>👋 That doesn&apos;t seem to be a city. Click somewhere else 😉</p>
    );

  return (
    <ul className={styles.citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
