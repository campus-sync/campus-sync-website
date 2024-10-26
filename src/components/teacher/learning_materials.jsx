import Upload from "../admin/upload";
import styles from "../admin/admin.module.css";
import style from "./learning.module.css";
// import Header from "../header/header";
import { Button } from "@mui/material";

export default function LearningMaterials() {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.container}>
        <div className={styles.heading}>Learning Amenities</div>
        <div className={styles.flex_container}>
          <section className={style.display_container}>
            <img
              src="src\assets\gamification.png"
              className={styles.college_image}
            />
            <div className={styles.college_details}>
              <div className={styles.college_name}>Module 1</div>
              <div className={styles.college_name}>
                Mathematics Module 1 notes
              </div>
            </div>
          </section>
          <section className={styles.add_container}>
            <div className={styles.add_title}>
              <p>Upload Documents</p>
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </div>

            <div className={styles.label}>Enter Document Title</div>
            <input
              type="text"
              className={styles.input}
              placeholder="College Name"
            />
            <div className={styles.label}>
              Add a Description to the Document
            </div>
            <textarea type="" className={styles.input_address}></textarea>
            <Upload />
          </section>
        </div>
      </div>
    </>
  );
}
