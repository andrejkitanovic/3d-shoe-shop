import React, { useState } from "react";
import classes from "./Layout.module.scss";

import Header from "../../components/Header/Header";
import Three from "../../Three/Three";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";
import Loader from "../../components/UI/Loader/Loader";

import ColorPicker from "../../components/ColorPicker/ColorPicker";

import Black from "../../assets/images/material/black.png";
import Brown from "../../assets/images/material/brown.png";
import DarkBlue from "../../assets/images/material/darkBlue.png";

import SoleWhite from "../../assets/images/material/soleWhite.png";
import SoleGray from "../../assets/images/material/soleGray.png";
import SoleSand from "../../assets/images/material/soleSand.png";

const Layout = () => {
  const [currDrop, setCurrDrop] = useState(1);
  const [loading, setLoading] = useState(true);

  const [shoeColor, setShoeColor] = useState("0x202a34");
  const [soleColor, setSoleColor] = useState("0xdbdbd3");

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

  const setShoeColorHandler = (color) => {
    if (shoeColor !== color) {
      setShoeColor(color);
    }
    setCurrDrop(d => d + 1);
  };

  const setSoleColorHandler = (color) => {
    if (soleColor !== color) {
      setSoleColor(color);
    }
    setCurrDrop(d => d + 1);
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
          >
            <ColorPicker
              img={Black}
              text="Black"
              palete={0x131411}
              onClick={setShoeColorHandler}
            />
            <ColorPicker
              img={Brown}
              text="Brown"
              palete={0x614829}
              onClick={setShoeColorHandler}
            />
            <ColorPicker
              img={DarkBlue}
              text="Dark Blue"
              palete={0x202a34}
              onClick={setShoeColorHandler}
            />
          </DropDown>
          <DropDown
            text="Sole"
            active={currDrop === 3}
            onClick={setDrop.bind(this, 3)}
          >
            <ColorPicker
              img={SoleWhite}
              text="White"
              palete={0xdbdbd3}
              onClick={setSoleColorHandler}
            />
            <ColorPicker
              img={SoleGray}
              text="Light Gray"
              palete={0x4b4b47}
              onClick={setSoleColorHandler}
            />
            <ColorPicker
              img={SoleSand}
              text="Sand / Cream"
              palete={0xb4976e}
              onClick={setSoleColorHandler}
            />
          </DropDown>
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
