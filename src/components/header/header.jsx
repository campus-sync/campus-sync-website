import styles from "./header.module.css";
export default function Header() {
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
