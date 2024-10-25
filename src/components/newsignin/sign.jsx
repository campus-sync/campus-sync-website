import { Button, TextField } from "@mui/material";
import styles from "./sign.module.css";

export default function Signin() {
  return (
    <>
      <div className={styles.main}>
        <img src="src\assets\CampusSync-Logo.png" className={styles.logo} />
        <h1>Welcome to CampusSync</h1>
        <section className={styles.signin_container}>
          <h2>Sign In</h2>
          <TextField required id="outlined-required" label="Phone Number" />
          <TextField required id="outlined-required" label="Password" />
          <Button variant="contained">Signin</Button>
        </section>
      </div>
    </>
  );
}
