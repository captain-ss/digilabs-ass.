import React from "react";
import logo from "../assets/SignInImg/Banner.svg";
import image1 from "../assets/SignInImg/image1.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import OtpInput from "react-otp-input";
import "./SignIn.css";

const SignIn = () => {
  const [nextState, setNextState] = useState(true);
  const [otp, setOtp] = useState("");
  return (
    <div className="backgroud-white inter-b">
      <img src={image1} alt="" />
      <div className="Box-1">
        <div className="inter-b">
          Welcome to <br />
          Systempackage
        </div>
        <form action="">
          <div className="input-div">
            <input type="text" placeholder="HelloUser" />
          </div>
          <div></div>
          <div className="input-div">
            <input type="password" />
            {/* <div className="eye-icon-background">
              <VisibilityIcon />
            </div> */}
            <div className="eye-icon-background">
              <VisibilityOffIcon />
            </div>
          </div>
          <div
            className="form-button"
            onMouseEnter={() => {
              setNextState(false);
            }}
            onMouseLeave={() => {
              setNextState(true);
            }}
          >
            Next East
            <EastIcon
              style={{
                transform: nextState ? "scale(0)" : "scale(1)",
                transition: "all .32s ease-in-out",
                marginLeft: nextState ? "0vw" : "1vw",
              }}
            />
          </div>
          <div className="inter-b forget-pass">Forgot your password?</div>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />

        </form>
      </div>
    </div>
  );
};

export default SignIn;
