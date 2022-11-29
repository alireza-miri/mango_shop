import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "150px",
        overflow: "scroll-initial",
      }}
    >
      <CDBSidebar
        textColor="#000000"
        backgroundColor="#E3FCBF"
        style={{ height: "80vh" }}
      >
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            fontWeight: "bold ",
            color: "green",
            fontSize: "30px",
            fontFamily: "'Titillium Web', sans-serif ",
            cursor: "pointer",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          Mango
        </Navbar.Brand>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
             
             as={Link} to="/settings/chanegProfile"
            >
              <CDBSidebarMenuItem>
                <img
                  src="https://img.icons8.com/material/24/null/admin-settings-male.png"
                  style={{ marginRight: "8px" }}
                />
                ChangeProfile
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              
              as={Link} to="/settings/Changepassword"
              
            >
              <CDBSidebarMenuItem>
                <img
                  src="https://img.icons8.com/ios-glyphs/23/null/lock--v1.png"
                  style={{ marginRight: "8px" }}
                />
                ChangePassword
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink  as={Link} to="/settings/uploadavatar">
              <CDBSidebarMenuItem>
                <img
                  src="https://img.icons8.com/material/24/null/administrator-male--v1.png"
                  style={{ marginRight: "8px" }}
                />
                Upload Avatar
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;
