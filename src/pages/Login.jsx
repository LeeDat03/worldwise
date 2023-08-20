import Button from "../components/Button";
import styles from "./Login.module.css";
import NavBar from "./NavBar";

function Login() {
  return (
    <div className={styles.login}>
      <NavBar />

      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <Button type="btn--green">Login</Button>
      </form>
    </div>
  );
}

export default Login;
