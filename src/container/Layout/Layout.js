import React, { useState } from "react";
import classes from "./Layout.module.scss";

import Header from "../../components/Header/Header";
import Three from "../../Three/Three";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";
import Loader from "../../components/UI/Loader/Loader";

const Layout = () => {
  const [currDrop, setCurrDrop] = useState(0);
  const [loading, setLoading] = useState(true);

  const [shoeColor, ] = useState("0x614829");
  const [soleColor, ] = useState("0xffffff");

  // console.log(loading)
  // const changeColor = () => {
  //   let randomShoeColor = Math.floor(Math.random() * 16777215).toString(16);
  //   randomShoeColor = "0x" + randomShoeColor;
  //   let randomSoleColor = Math.floor(Math.random() * 16777215).toString(16);
  //   randomSoleColor = "0x" + randomSoleColor;
  //   console.log(randomShoeColor);
  //   console.log(randomSoleColor);
  //   setShoeColor(randomShoeColor);
  //   setSoleColor(randomSoleColor);
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", changeColor);
  // }, []);

  const setDrop = (n) => {
    if (n !== currDrop) {
      setCurrDrop(n);
    } else setCurrDrop(0);
  };

  const finishedLoading = () => {
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className={classes.Layout}>
        <Header />
        <div className={classes.Model}>
          {loading ? <Loader /> : null}
          <Three
            loading={finishedLoading}
            shoeColor={shoeColor}
            soleColor={soleColor}
          />
        </div>
        <div className={classes.Drop}>
          <DropDown
            text="Product Information"
            active={currDrop === 1}
            onClick={setDrop.bind(this, 1)}
          />
          <DropDown
            text="Leather"
            active={currDrop === 2}
            onClick={setDrop.bind(this, 2)}
          />
          <DropDown
            text="Sole"
            active={currDrop === 3}
            onClick={setDrop.bind(this, 3)}
          />
          <DropDown
            text="Personalization"
            active={currDrop === 4}
            onClick={setDrop.bind(this, 4)}
          />
          <DropDown
            text="Accessories"
            active={currDrop === 5}
            onClick={setDrop.bind(this, 5)}
          />
        </div>
        <Button />
      </div>
    </React.Fragment>
  );
};

export default Layout;
