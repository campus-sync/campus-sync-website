import styles from "./vendor.module.css";
import Header from "../header/header";

export default function Vendor() {
  return (
    <>
      <Header />
      <section className={styles.vendor_section}>
        <h2>Our LMS Vendors</h2>
        <div className={styles.upload}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
          </svg>
          <p>Register Vendor</p>
        </div>
        <div className={styles.vendor_grid}>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Interactive Learning</div>
            <img src="src\assets\game.jpg" alt="Vendor 1" />
            <h3>Vendor Name 1</h3>
            <p>
              Specialized in interactive learning tools and assessment tracking.
            </p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Course Management</div>
            <img src="src\assets\gamification.png" alt="Vendor 2" />
            <h3>Vendor Name 2</h3>
            <p>
              Offers a seamless integration of course content and user
              management.
            </p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Analytics</div>
            <img src="src\assets\gamification.png" alt="Vendor 3" />
            <h3>Vendor Name 3</h3>
            <p>
              Known for extensive analytics and student engagement features.
            </p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Personalization</div>
            <img src="src\assets\gamification.png" alt="Vendor 4" />
            <h3>Vendor Name 4</h3>
            <p>Provides personalized learning paths and curriculum mapping.</p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Data Security</div>
            <img src="src\assets\gamification.png" alt="Vendor 5" />
            <h3>Vendor Name 5</h3>
            <p>Offers robust data privacy and secure student records.</p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Gamification</div>
            <img src="src\assets\gamification.png" alt="Vendor 6" />
            <h3>Vendor Name 6</h3>
            <p>Integrates gamification to increase student motivation.</p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>Blended Learning</div>
            <img src="src\assets\gamification.png" alt="Vendor 7" />
            <h3>Vendor Name 7</h3>
            <p>Specialized in blended learning and course customization.</p>
          </div>
          <div className={styles.vendor_card}>
            <div className={styles.category}>AI Insights</div>
            <img src="src\assets\gamification.png" alt="Vendor 8" />
            <h3>Vendor Name 8</h3>
            <p>
              Features AI-driven insights for personalized learning experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
