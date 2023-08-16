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
        <button className="btn btn--green">Login</button>
      </form>
    </div>
  );
}

export default Login;
