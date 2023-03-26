import React from "react";
import logo from "../assets/SignInImg/Banner.svg";
import image1 from "../assets/SignInImg/image1.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EastIcon from "@mui/icons-material/East";
import { useState, useEffect } from "react";
import OtpForm from "./OtpForm";
import "./SignIn.css";

const SignIn = () => {
  const [nextState, setNextState] = useState(true);
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);
  const [otp, setOtp] = useState("0");
  useEffect(() => {
    OtpHandler();
  }, [otp]);

  const OtpHandler = () => {
    if (otp.length == 6) {
      setState2(false);
    }
  };
  return (
    <div className="backgroud-white inter-b wrapper-signin">
      <div className="inter-b"
      style={{
        color:"#0858F7",
        position:"absolute",
        top:"50vw",
        left:"50vh",
        zIndex:"7"
      }}
      >Success !</div>
      <img
        src={image1}
        className={state2 ? "" : "success-ani"}
        style={{
          padding: "3vw",
        }}
        alt=""
      />
      <div
        className="Box-1 "
        style={{
          opacity: state2 ? "1" : "0",
          transition: "all .32s ease-out",
        }}
      >
        <form action="">
          <div
            className="step-1"
            style={{
              zIndex: state1 ? "5" : "1",
              opacity: state1 ? "1" : "0",
            }}
          >
            <h1
              className="inter-b transition-step1"
              style={{
                bottom: state1 ? "0vw" : "-3vw",
              }}
            >
              Welcome to <br />
              Systempackage
            </h1>
            <div className="input-div">
              <input type="text" className="input-1" placeholder="HelloUser" />
            </div>
            <div></div>
            <div className="input-div">
              <input type="password" className="input-1" />
              {/* <div className="eye-icon-background">
              <VisibilityIcon />
            </div> */}
              <div className="eye-icon-background">
                <VisibilityOffIcon />
              </div>
            </div>
            <div
              className="form-button transition-step1"
              onMouseEnter={() => {
                setNextState(false);
              }}
              onMouseLeave={() => {
                setNextState(true);
              }}
              onClick={() => {
                setState1(false);
              }}
              style={{
                bottom: state1 ? "0vw" : "-3vw",
                cursor: "pointer",
              }}
            >
              Next
              <EastIcon
                style={{
                  transform: nextState ? "scale(0)" : "scale(1)",
                  transition: "all .32s ease-in-out",
                  marginLeft: nextState ? "0vw" : "1vw",
                }}
              />
            </div>
            <div
              className="inter-b forget-pass transition-step1"
              style={{
                bottom: state1 ? "0vw" : "-3vw",
              }}
            >
              Forgot your password?
            </div>
          </div>
          <div
            className="step-2"
            style={{
              zIndex: state1 ? "3" : "5",
              opacity: state1 ? "0" : "1",
            }}
          >
            <h1
              className="inter-b transition-step1"
              style={{
                bottom: state1 ? "0vw" : "-3vw",
              }}
            >
              Enter the verification <br /> code to continue
            </h1>
            <p
              className="inter-l transition-step1"
              style={{
                color: "#7A7A85",
                bottom: state1 ? "0vw" : "-3vw",
                marginBottom: "5vw",
              }}
            >
              We sent to
              <span
                style={{
                  color: "#0858F7",
                }}
              >
                hellouser@heads.design.
              </span>
              If you
              <br />
              don’t see it, check your spam.
            </p>
            <OtpForm otp={otp} setOtp={setOtp} />
            <div
              className="step-2-back transition-step1"
              style={{
                color: "#7A7A85",
                bottom: state1 ? "2vw" : "-1vw",
              }}
            >
              <span
                className="inter-b"
                style={{
                  color: "#0858F7",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setState1(true);
                }}
              >
                Back
              </span>
              <span
                className="inter-b"
                style={{
                  color: "#7A7A85",
                }}
              >
                Resent 00:10
              </span>
            </div>
          </div>
        </form>
      </div>
      <p
        style={{
          padding: "3vw",
        }}
        className="inter-l"
      >
        Not member?
        <span
          style={{
            color: "#0858F7",
          }}
        >
          Create account
        </span>
      </p>
    </div>
  );
};

export default SignIn;
