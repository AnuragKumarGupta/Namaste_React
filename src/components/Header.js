import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onLineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onLineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
