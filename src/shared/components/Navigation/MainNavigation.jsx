import React, { useState } from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";

function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
      {/* {drawerIsOpen && ( */}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLink />
          </nav>
        </SideDrawer>
      {/* )} */}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLink />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
