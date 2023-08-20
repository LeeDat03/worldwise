import Button from "./Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="city">City name</label>
        <input id="city" type="text" />
      </div>
      <div>
        <label htmlFor="time">When did you when to CITY</label>
        <input id="time" type="text" />
      </div>
      <div>
        <label htmlFor="note">Notes about your trip to CITY</label>
        <textarea id="note" type="text" />
      </div>
      <div>
        <Button type="btn--green">Add</Button>
        <Button type="btn--back">&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;
