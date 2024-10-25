import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./sign.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  GetRefreshTokenCookie,
  GetTokenCookie,
  GetUserCookie,
  SaveRefreshTokenCookie,
  SaveTokenCookie,
  SaveUserCookie,
} from "../../util/auth/cookies";
import { Navigate, useNavigate } from "react-router-dom";
import { RefreshUser, SaveUserData } from "../../util/auth/user-utils";

export default function Signin() {
  const router = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [accountTypeError, setAccountTypeError] = useState("");

  const handlePhoneChange = (event) => {
    const value = event.target.value;

    if (value.length > 10) return;

    if (Number(value) || value === "") {
      setPhoneError("");
      setPhone(value);
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    setPasswordError("");
    setPassword(value);
  };

  const handleAccountTypeChange = (event) => {
    const value = event.target.value;

    setAccountTypeError("");
    setAccountType(value);
  };

  const handleSignIn = async () => {
    if (phone.length !== 10) {
      setPhoneError("Invalid phone number");
      return;
    }

    if (!password.length) {
      setPasswordError("Password is required");
      return;
    }

    if (!accountType) {
      setAccountTypeError("Account type is required");
      return;
    }

    const reqBody = {
      phone,
      password,
    };

    const endpoint = `${import.meta.env.VITE_API_URL}/auth/login`;

    try {
      const response = await axios.post(endpoint, reqBody, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "x-account-type": accountType,
        },
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      });

      const resData = response.data;
      if (resData.success) {
        SaveUserData(
          resData.data.user,
          resData.data.access_token,
          resData.data.refresh_token
        );

        router("/vendor");
      }
    } catch (error) {
      console.log("Error - ", error.message);
    }
  };

  useEffect(() => {
    if (GetUserCookie() && GetTokenCookie()) {
      router("/vendor");
    } else if (GetRefreshTokenCookie()) {
      RefreshUser().then((isRefreshed) => {
        console.log(isRefreshed);
        if (isRefreshed) {
          router("/vendor");
        }
      });
    }
  }, []);

  return (
    <>
      <div className={styles.main}>
        <img src="src\assets\CampusSync-Logo.png" className={styles.logo} />
        <h1>Welcome to CampusSync</h1>
        <section className={styles.signin_container}>
          <h2>Sign In</h2>
          <TextField
            required
            error={phoneError.length > 0}
            id="phone-input"
            label="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            helperText={phoneError}
          />
          <TextField
            required
            error={passwordError.length > 0}
            id="password-input"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            helperText={passwordError}
          />

          <FormControl
            sx={{ minWidth: 120 }}
            error={accountTypeError.length > 0}
          >
            <InputLabel id="demo-simple-select-error-label">
              Account Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={accountType}
              label="Account Type"
              onChange={handleAccountTypeChange}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"institution_spoc"}>Institution SPOC</MenuItem>
              <MenuItem value={"department_spoc"}>Department SPOC</MenuItem>
              <MenuItem value={"vendor"}>Vendor</MenuItem>
              <MenuItem value={"teacher"}>Teacher</MenuItem>
              <MenuItem value={"student"}>Student</MenuItem>
            </Select>
            <FormHelperText>{accountTypeError}</FormHelperText>
          </FormControl>

          <Button variant="contained" size="large" onClick={handleSignIn}>
            Signin
          </Button>
        </section>
      </div>
    </>
  );
}
