import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Loader from "./Loader";

function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Loader />;

  if (cities.length === 0)
    return (
      <p>👋 That doesn&apos;t seem to be a city. Click somewhere else 😉</p>
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
