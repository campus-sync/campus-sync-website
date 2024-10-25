import styles from "./canteen.module.css";
import Header from "../header/header";
import { useEffect } from "react";
import { useState } from "react";
import { GetRequest } from "../../util/axios-requests/get-request";
import { GetTokenCookie, GetUserCookie } from "../../util/auth/cookies";
export default function Canteen() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [snackItems, setSnackItems] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) return;

    setIsLoading(true);

    const user = GetUserCookie();
    const accessToken = GetTokenCookie();

    const endpoint = `${import.meta.env.VITE_API_URL}/canteen/list`;
    const headers = {
      "x-account-type": user.account_type,
      "x-access-token": accessToken,
      "x-account-id": user.id,
    };

    GetRequest(endpoint, headers).then((response) => {
      const data = response.data;
      if (!response.success) {
        setIsLoading(false);
        return;
      }

      const items = data.items;

      const breakfastItems = [];
      const lunchItems = [];
      const snackItems = [];

      items.forEach((item) => {
        if (item.type === "breakfast") {
          breakfastItems.push(item);
        } else if (item.type === "lunch") {
          lunchItems.push(item);
        } else if (item.type === "snack") {
          snackItems.push(item);
        }
      });

      setBreakfastItems(breakfastItems);
      setLunchItems(lunchItems);
      setSnackItems(snackItems);
      setIsLoading(false);
    });
  }, [isMounted]);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.menu_container}>
          <h1 className={styles.main_head}>Our Delicious Menu</h1>
          {/* <!-- Breakfast Menu --> */}
          <div className={styles.menu_section}>
            <h2>Breakfast</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className={styles.menu_items}>
                {breakfastItems.length > 0 ? (
                  breakfastItems.map((item) => (
                    <div className={styles.menu_item} key={item.id}>
                      <img src={item.photo} alt={item.name} />
                      <div className={styles.item_info}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className={styles.price}>₹{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items found.</p>
                )}
              </div>
            )}
          </div>

          {/* <!-- Lunch Menu --> */}
          <div className={styles.menu_section}>
            <h2>Lunch</h2>
            <div className={styles.menu_items}>
              {isLoading ? (
                <p>Loading...</p>
              ) : lunchItems.length > 0 ? (
                lunchItems.map((item) => (
                  <div className={styles.menu_item} key={item.id}>
                    <img src={item.photo} alt={item.name} />
                    <div className={styles.item_info}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className={styles.price}>₹{item.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items found.</p>
              )}
            </div>
          </div>

          {/* <!-- Snacks Menu --> */}
          <div className={styles.menu_section}>
            <h2>Snacks</h2>
            <div className={styles.menu_items}>
              {isLoading ? (
                <p>Loading...</p>
              ) : snackItems.length > 0 ? (
                snackItems.map((item) => (
                  <div className={styles.menu_item} key={item.id}>
                    <img src={item.photo} alt={item.name} />
                    <div className={styles.item_info}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p className={styles.price}>₹{item.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
