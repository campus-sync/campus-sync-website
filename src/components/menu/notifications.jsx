import styles from "./notifications.module.css";

export default function Notifications() {
  const accordionHeaders = document.querySelectorAll(".accordion_header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Collapse all active items
      accordionHeaders.forEach((h) => h.classList.remove("active"));

      // Expand clicked item if not already active
      if (!isActive) {
        this.classList.add("active");
      }
    });
  });
  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_header}>
            <h3>
              <i className={styles.fas_fa_book}></i> Assignment Due Date{" "}
              <span className={styles.badge_badge_assignment}>Assignment</span>
            </h3>
          </div>
          <div className={styles.accordion_content}>
            <p>
              Your assignment on "Web Development Basics" is due on October 31.
              Please make sure to submit it on time.
            </p>
          </div>
        </div>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_header}>
            <h3>
              <i className={styles.fas_fa_file_alt}></i> New Lecture Material
              Available{" "}
              <span className={styles.badge_badge_material}>Material</span>
            </h3>
          </div>
          <div className={styles.accordion_content}>
            <p>
              New lecture notes for "Data Structures and Algorithms" have been
              uploaded. Check the resources section.
            </p>
          </div>
        </div>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_header}>
            <h3>
              <i className={styles.fas_fa_calendar_alt}></i> Exam Schedule
              Released <span className={styles.badge_badge_exam}>Exam</span>
            </h3>
          </div>
          <div className={styles.accordion_content}>
            <p>
              The final semester exam schedule is now available. You can find it
              under the "Exams" tab in your LMS.
            </p>
          </div>
        </div>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_header}>
            <h3>
              <i className={styles.fas_fa_bullhorn}></i> Upcoming Workshop{" "}
              <span className={styles.badge_badge_event}>Event</span>
            </h3>
          </div>
          <div className={styles.accordion_content}>
            <p>
              Join us for the "AI in Education" workshop on November 5. Reserve
              your spot through the LMS.
            </p>
          </div>
        </div>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_header}>
            <h3>
              <i className={styles.fas_fa_clipboard_list}></i> Quiz Results
              Available{" "}
              <span className={styles.badge_badge_material}>Material</span>
            </h3>
          </div>
          <div className={styles.accordion_content}>
            <p>
              Your results for the recent quiz on "Operating Systems" have been
              posted. Review your performance under "Grades".
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
