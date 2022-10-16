import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FcAbout style={{ color: "black" }} />,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: isOpen ? "200px" : "70px" }} className="sidebar">
        <div className="top_section">
          <img
            onClick={toggle}
            style={{
              width: "70px",
              marginLeft: isOpen ? "50px" : "0px",
              marginTop: "5px",
              marginBottom: "8px",
            }}
            src="/static/logo3.png"
          ></img>
        </div>
        {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div> */}
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeStyle={{
              background: "lightskyblue",
              color: "#000",
            }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ width: "100%" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
