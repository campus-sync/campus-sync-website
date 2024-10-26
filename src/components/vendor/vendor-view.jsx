import { useEffect, useState } from "react";
import styles from "../canteen/canteen.module.css";
import Header from "../header/header";
import { useParams } from "react-router-dom";
import { GetTokenCookie, GetUserCookie } from "../../util/auth/cookies";
import { GetRequest } from "../../util/axios-requests/get-request";

export default function VendorView() {
  const { id } = useParams();
  console.log(id);

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [vendor, setVendor] = useState();
  const [vendorItems, setVendorItems] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) return;

    setIsLoading(true);

    const user = GetUserCookie();
    const token = GetTokenCookie();

    const endpoint = `${import.meta.env.VITE_API_URL}/vendor/list/${id}`;
    const headers = {
      "x-account-type": user.account_type,
      "x-account-id": user.id,
      "x-access-token": token,
    };

    GetRequest(endpoint, headers).then((response) => {
      const data = response.data;
      if (!response.success) {
        setIsLoading(false);
        return;
      }

      setVendor(data.vendor);
      setVendorItems(data.items);
      setIsLoading(false);
    });
  }, [isMounted, id]);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.menu_container}>
          <>
            {/* <h1 className={styles.main_head}>{vendor?.name}</h1> */}
            {/* <!-- Breakfast Menu --> */}
            <div className={styles.menu_section}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <h2 className={styles.menu_head} style={{ fontSize: "2rem" }}>
                    {vendor?.name}
                  </h2>
                  <div className={styles.menu_items}>
                    {vendorItems.length > 0 ? (
                      vendorItems.map((item) => (
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
                </>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
}
