import { useEffect } from "react";
import styles from "./header.module.css";
import { GetTokenCookie, GetUserCookie } from "../../util/auth/cookies";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const router = useNavigate();

  useEffect(() => {
    const user = GetUserCookie();
    const accessToken = GetTokenCookie();

    if (!user || !accessToken) {
      return router("/");
    }
  });

  return (
    <>
      <div className={styles.header}>
        <div></div>
        <div className={styles.header_logo_title}>
          <img
            src="src\assets\CampusSync-Logo.png"
            className={styles.header_logo}
            alt="logo"
          />
          <div className={styles.header_title}>CampusSync</div>
        </div>
        <button className={styles.logout}>Log Out</button>
      </div>
    </>
  );
}
