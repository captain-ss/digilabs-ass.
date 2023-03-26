import React from "react";
import OtpInput from "react-otp-input";
import "./OtpForm.css";

const OtpForm = ({ otp, setOtp }) => {
  return (
    <OtpInput
      containerStyle="otp-input"
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>{"  "}</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default OtpForm;
