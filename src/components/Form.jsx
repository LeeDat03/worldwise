import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Form.module.css";
import { useURLPosition } from "../hooks/useURLPosition";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Message from "./Message";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const { createCity } = useCities();
  const navigate = useNavigate();
  const [lat, lng] = useURLPosition();

  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    function () {
      if (!lat || !lng) return;

      async function fetchCity() {
        setErrorMessage("");
        setIsLoading(true);
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          if (!res.ok) throw new Error(`Can't fetch the data`);
          const data = await res.json();
          if (!data) throw new Error(`Can't get data`);

          if (!data.city)
            throw new Error(`That's not a city. Click somewhere else`);

          setCity(data.city);
          setCountry(data.countryName);
          setEmoji(`https://flagsapi.com/${data.countryCode}/flat/64.png`);
        } catch (err) {
          setErrorMessage(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCity();
    },
    [lat, lng]
  );

  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleAddCity(e) {
    e.preventDefault();
    if (!city || !country || !emoji || !date) return;

    const newCity = {
      cityName: city,
      country,
      emoji,
      note,
      date,
      position: {
        lat,
        lng,
      },
    };

    createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoading) return <Loader />;

  if (errorMessage) return <Message>{errorMessage}</Message>;

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="city">City name</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">When did you when to {city}</label>
        <DatePicker
          selected={date}
          onSelect={(e) => setDate(e)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <label htmlFor="note">Notes about your trip to {city}</label>
        <textarea
          id="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div>
        <Button type="btn--green" onClick={handleAddCity}>
          Add
        </Button>
        <Button onClick={handleBack} type="btn--back">
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
