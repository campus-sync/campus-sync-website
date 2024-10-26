import { useState } from "react";
import Menu from "./menu";
import styles from "./studentenrol.module.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
export default function StudentEnrol() {
  const [selectedClass, setSelectedClass] = useState("");

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <>
      {/* <Menu /> */}
      <div className={styles.container}>
        <div className={styles.heading}>Student Enrollment Details</div>
        <div className={styles.flex_container}>
          <section className={styles.display_container}>
            <div className={styles.student_info}>
              <div className={styles.college_details}>
                <div className={styles.college_name}>
                  <strong className={styles.name}>Sharanya G K</strong>
                </div>
                <div className={styles.display_student_info}>
                  <label className={styles.label}>Reg No. : </label>
                  <div className={styles.college_name}>4VM21IS037</div>
                  <label className={styles.label}>Phone No. : </label>
                  <div className={styles.college_name}>8765432780</div>
                </div>
              </div>
              <div className={styles.class_display}>1st Sem ISE </div>
            </div>
          </section>
          <section className={styles.add_container}>
            <div className={styles.add_title}>
              <p>Register Student</p>
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </div>
            <div className={styles.label_heading}>Enter Student Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Student Name"
            />
            <div className={styles.label_heading}>Enter Student USN</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Student USN"
            />
            <div className={styles.label_heading}>
              Enter Student Phone Number
            </div>
            <input
              type="number"
              className={styles.input}
              placeholder="Student Phone Number"
            />
            <div className={styles.label_heading}>Allot Class</div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Class</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedClass}
                label="Class"
                onChange={handleClassChange}
              >
                <MenuItem value={"1st Sem ISE"}>1st Sem ISE</MenuItem>
                <MenuItem value={"3rd Sem ECE"}>3rd Sem ECE</MenuItem>
                <MenuItem value={"1st Sem CSE"}>1st Sem CSE</MenuItem>
              </Select>
            </FormControl>
          </section>
        </div>
      </div>
    </>
  );
}
