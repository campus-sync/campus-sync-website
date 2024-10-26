import styles from "./vendor.module.css";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { GetTokenCookie, GetUserCookie } from "../../util/auth/cookies";
import { useNavigate } from "react-router-dom";
import { GetRequest } from "../../util/axios-requests/get-request";

export default function Vendor() {
  const [vendors, setVendors] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) return;

    setIsLoading(true);
    const user = GetUserCookie();
    const token = GetTokenCookie();

    if (!user || !token) return router("/");

    const endpoint = `${import.meta.env.VITE_API_URL}/user/list/vendor`;
    const headers = {
      "x-account-type": user.account_type,
      "x-account-id": user.id,
      "x-access-token": token,
    };

    GetRequest(endpoint, headers).then((response) => {
      console.log(response);

      if (!response.success) return;
      setVendors(response.data.items);
      setIsLoading(false);
    });
  }, [isMounted, router]);

  return (
    <>
      <Header />
      <section className={styles.vendor_section}>
        <h2>Third Party Vendors</h2>
        <div className={styles.upload}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgb(63, 63, 63)"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
          </svg>
          <div>Register Vendor</div>
        </div>
        <div className={styles.vendor_grid}>
          {isLoading ? (
            <p>Loading...</p>
          ) : vendors.length > 0 ? (
            vendors.map((vendor) => (
              <div
                className={styles.vendor_card}
                key={vendor.id}
                id={vendor.id}
                onClick={() => {
                  return router(`/vendor/${vendor.id}`);
                }}
              >
                <div className={styles.category}>
                  {vendor.description?.split(" ")[0]}
                </div>
                <img src={vendor.photo} alt={`Vendor ${vendor.name}`} />
                <h3>{vendor.name}</h3>
                <p>{vendor.description}</p>
              </div>
            ))
          ) : (
            <p>No vendors found.</p>
          )}
        </div>
      </section>
    </>
  );
}
