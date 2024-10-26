import { useEffect, useState } from "react";
import styles from "./header.module.css";
import {
  DeleteTokenCookie,
  DeleteUserCookie,
  GetTokenCookie,
  GetUserCookie,
} from "../../util/auth/cookies";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/CampusSync-Logo.png";
import SidebarMenu from "../menu/menu";
import { DeleteUserLocalStorage } from "../../util/auth/local-storage";

export default function Header() {
  const router = useNavigate();
  const [links, setLinks] = useState([]);

  const logoutHandler = () => {
    DeleteUserCookie();
    DeleteTokenCookie();
    DeleteUserLocalStorage();
    router("/");
  };

  useEffect(() => {
    const user = GetUserCookie();
    const accessToken = GetTokenCookie();

    if (!user || !accessToken) {
      return router("/");
    }

    if (user.account_type === "admin") {
      setLinks([
        {
          name: "Colleges",
          url: "/colleges",
        },
      ]);
    } else if (user.account_type === "student") {
      setLinks([
        {
          name: "Calendar",
          url: "/calendar",
        },
        {
          name: "Canteen",
          url: "/canteen",
        },
        {
          name: "Vendors",
          url: "/vendor",
        },
      ]);
    }
  }, [router]);

  return (
    <>
      <div className={styles.header}>
        <div>
          <SidebarMenu links={links} />
        </div>
        <div className={styles.header_logo_title}>
          <img src={logo} className={styles.header_logo} alt="logo" />
          <div className={styles.header_title}>CampusSync</div>
        </div>
        <button className={styles.logout} onClick={logoutHandler}>
          Log Out
        </button>
      </div>
    </>
  );
}
