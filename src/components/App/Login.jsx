import styles from "./Login.module.css";
import IconButton from "../Buttons/IconButton";
import { RiGoogleFill } from "react-icons/ri";
import { useContext } from "react";
import Context from "./Context";
import clsx from "clsx";
function Login() {
  const { login, isLogged } = useContext(Context);
  async function handleSignIn() {
    login();
  }
  return (
    <div className={clsx(styles.page, isLogged ? styles.hide : styles.show)}>
      <h1>Checks Me</h1>
      <div className={styles.cont}>
        <h2>Sign-in</h2>
        <div className={styles.btnCont}>
          <IconButton
            icon={<RiGoogleFill />}
            text="Continue with google"
            func={handleSignIn}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
