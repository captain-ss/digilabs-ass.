import React from "react";
import logo from "../assets/SignInImg/Banner.svg";
import image1 from "../assets/SignInImg/image1.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./SignIn.css";
const SignIn = () => {
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
          <div>
            
          </div>
          <div className="input-div">
            <input type="password" />
            {/* <div className="eye-icon-background">
              <VisibilityIcon />
            </div> */}
            <div className="eye-icon-background">
              <VisibilityOffIcon />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
