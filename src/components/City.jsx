import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
import Loader from "./Loader";
import styles from "./City.module.css";
import { useNavigate, useParams } from "react-router-dom";

function formatDate(date) {
  const tempDate = new Date(date);
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return tempDate.toLocaleDateString("vn-VN", option);
}

function City() {
  const { currentCity, getCity, isLoading } = useCities();
  const { cityName, emoji, date, note } = currentCity;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Loader />;

  return (
    <div className={styles.city}>
      <div>
        <h5>City name</h5>
        <h3>
          <span>
            <img src={emoji} />
          </span>
          {cityName}
        </h3>
      </div>
      <div>
        <h5>You went to {cityName} on</h5>
        <h4>{formatDate(date)}</h4>
      </div>

      {note && (
        <div>
          <h5>Your note</h5>
          <h4>{note}</h4>
        </div>
      )}

      <div>
        <h5>Learn more</h5>
        <h4>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </h4>
      </div>
      <Button onClick={() => navigate(-1)} type="btn--back">
        &larr; Back
      </Button>
    </div>
  );
}

export default City;
