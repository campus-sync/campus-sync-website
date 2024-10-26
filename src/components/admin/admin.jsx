import Upload from "./upload.jsx";
import styles from "./admin.module.css";
import Header from "../header/header";
import { Button } from "@mui/material";

export default function Admin() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.heading}>College Enrollment Details</div>
        <div className={styles.flex_container}>
          <section className={styles.display_container}>
            <img
              src="src\assets\gamification.png"
              className={styles.college_image}
            />
            <div className={styles.college_details}>
              <div className={styles.college_name}>
                Vidya Vikas Institute of Engineering
              </div>
              <div className={styles.college_name}>Sharanya</div>
              <div className={styles.college_name}>fjrjfnfjrj</div>
            </div>
          </section>
          <section className={styles.add_container}>
            <div className={styles.add_title}>
              <p>Register College</p>
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </div>

            <div className={styles.label}>Enter College Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="College Name"
            />
            <div className={styles.label}>College Address</div>
            <textarea type="" className={styles.input_address}></textarea>
            <div className={styles.label}>Enter Institution SPOC name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="SPOC Name"
            />
            <div className={styles.label}>Enter SPOC Phone Number</div>
            <input
              type="number"
              className={styles.input}
              placeholder="SPOC Phone Number"
            />
            <Upload />
          </section>
        </div>
      </div>
    </>
  );
}
