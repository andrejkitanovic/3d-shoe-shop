import React from "react";
import classes from "./Layout.module.scss";

import Header from "../../components/Header/Header";
import Three from "../../Three/Three";
import DropDown from "../../components/DropDown/DropDown";
import Button from '../../components/Button/Button'

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <Header />
      <Three />
      <div className={classes.Drop}>
        <DropDown text="Product Information" />
        <DropDown text="Leather" />
        <DropDown text="Sole" />
        <DropDown text="Personalization" />
        <DropDown text="Accessories" />
      </div>
      <Button />
    </div>
  );
};

export default Layout;
