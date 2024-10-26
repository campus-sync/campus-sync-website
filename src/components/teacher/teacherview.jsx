import React, { useState } from "react";
import styles from "./teacherview.module.css";
import Header from "../header/header";

// Sample subjects data
const subjects = [
  { id: 1, subjectCode: "MATH101", name: "Mathematics", classCode: "A1" },
  { id: 2, subjectCode: "PHY101", name: "Physics", classCode: "B2" },
  { id: 3, subjectCode: "CHEM101", name: "Chemistry", classCode: "C3" },
];

// Sidebar component
const Sidebar = ({ onSelectSubject }) => (
  <div className={styles.sidebar}>
    <h2>Subjects</h2>
  </div>
);

// Main Teacher View component
const TeacherView = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <>
      {/* <Header /> */}
      <div className={styles.teacher_view}>
        <Sidebar onSelectSubject={handleSubjectSelect} />

        <div className={styles.content}>
          <div className={styles.subject_card}>
            <h3>Mathematics</h3>
            <p>Subject Code: MATH101</p>
            <p>Class Code: A1</p>
            <div className={styles.buttons}>
              <button
                onClick={() => (window.location.href = "/learning-materials")}
              >
                Learning Materials
              </button>
              <button onClick={() => (window.location.href = "/notifications")}>
                Notifications
              </button>
              <button onClick={() => (window.location.href = "/attendance")}>
                Attendance
              </button>
            </div>
          </div>
          <div className={styles.subject_card}>
            <h3>Physics</h3>
            <p>Subject Code: PHY101</p>
            <p>Class Code: B2</p>
            <div className={styles.buttons}>
              <button
                onClick={() => (window.location.href = "/learning-materials")}
              >
                Learning Materials
              </button>
              <button onClick={() => (window.location.href = "/notifications")}>
                Notifications
              </button>
              <button onClick={() => (window.location.href = "/attendance")}>
                Attendance
              </button>
            </div>
          </div>
          <div className={styles.subject_card}>
            <h3>Chemistry</h3>
            <p>Subject Code: CHEM101</p>
            <p>Class Code: C3</p>
            <div className={styles.buttons}>
              <button
                onClick={() => (window.location.href = "/learning-materials")}
              >
                Learning Materials
              </button>
              <button onClick={() => (window.location.href = "/notifications")}>
                Notifications
              </button>
              <button onClick={() => (window.location.href = "/attendance")}>
                Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeacherView;
