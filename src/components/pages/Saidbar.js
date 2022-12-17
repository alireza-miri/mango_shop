import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import "./sidbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const Sidebar = ({ tab }) => {
  const navigate = useNavigate();
  const [prfile, setProfile] = useState(tab === "chprf" ? true : false);
  const [pas, setPas] = useState(tab === "chpas" ? true : false);
  const [avatar, setAvatar] = useState(tab === "avt" ? true : false);
  return (
    // <div >
    <CDBSidebarMenu className="sidenav">
      <NavLink as={Link} to="/settings/chanegProfile">
        <CDBSidebarMenuItem>
          <img
            src="https://img.icons8.com/material/30/null/admin-settings-male.png"
            style={{ marginRight: "8px" }}
          />
          ChangeProfile
          {prfile && (
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/25/null/external-star-reputation-bearicons-glyph-bearicons.png"
              style={{ padding: "10px" }}
            />
          )}
        </CDBSidebarMenuItem>
      </NavLink>
      <NavLink as={Link} to="/settings/Changepassword">
        <CDBSidebarMenuItem>
          <img
            src="https://img.icons8.com/ios-glyphs/30/null/lock--v1.png"
            style={{ marginRight: "8px" }}
          />
          ChangePassword{" "}
          {pas && (
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/25/null/external-star-reputation-bearicons-glyph-bearicons.png"
              style={{ padding: "10px" }}
            />
          )}
        </CDBSidebarMenuItem>
      </NavLink>
      <NavLink as={Link} to="/settings/uploadavatar">
        <CDBSidebarMenuItem>
          <img
            src="https://img.icons8.com/material/30/null/administrator-male--v1.png"
            style={{ marginRight: "8px" }}
          />
          Upload Avatar{" "}
          {avatar && (
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/25/null/external-star-reputation-bearicons-glyph-bearicons.png"
              style={{ padding: "10px" }}
            />
          )}
        </CDBSidebarMenuItem>
      </NavLink>
    </CDBSidebarMenu>
    // </div>
  );
};
export default Sidebar;
