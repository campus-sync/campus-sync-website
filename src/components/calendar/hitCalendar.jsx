import React, { useState, useEffect } from "react";
import styles from "./hitCalendar.module.css";

const Calendar = () => {
  const today = new Date();

  const [activeDate, setActiveDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day) => {
    setActiveDate(new Date(currentYear, currentMonth, day));
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className={styles.calendar_container}>
      <div className={styles.calendar_header}>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className={styles.calendar_grid}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={styles.calendar_day_name}>
            {day}
          </div>
        ))}
        {Array(startDayOfMonth)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className={styles.calendar_day_empty}></div>
          ))}
        {Array.from(
          { length: daysInMonth(currentMonth, currentYear) },
          (_, i) => (
            <div
              key={i + 1}
              className={
                activeDate.getDate() === i + 1 &&
                activeDate.getMonth() === currentMonth &&
                activeDate.getFullYear() === currentYear
                  ? `${styles.calendar_day} ${styles.active}`
                  : styles.calendar_day
              }
              onClick={() => handleDateClick(i + 1)}
            >
              {i + 1}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
