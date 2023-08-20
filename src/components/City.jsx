import Button from "./Button";
import styles from "./City.module.css";

const tempCity = {
  cityName: "Castello de la Plana",
  country: "Spain",
  emoji: "https://flagsapi.com/BE/flat/64.png",
  date: "2023-08-13T10:20:55.674Z",
  notes: "",
  position: {
    lat: "40.00083226818754",
    lng: "-0.01721238820203697",
  },
  id: 1,
};

function formatDate(date) {
  const tempDate = new Date(date);
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return tempDate.toLocaleDateString("vn-VN", option);
}

function City({ city }) {
  const { cityName, emoji, date, note } = tempCity;

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
      <Button type="btn--back">&larr; Back</Button>
    </div>
  );
}

export default City;
