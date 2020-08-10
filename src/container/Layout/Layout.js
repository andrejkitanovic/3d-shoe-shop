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
import LightGray from "../../assets/images/material/lightGray.png";
import Cognac from "../../assets/images/material/cognac.png";
import Chocolate from "../../assets/images/material/chocolate.png";

import SoleWhite from "../../assets/images/material/soleWhite.png";
import SoleGray from "../../assets/images/material/soleGray.png";
import SoleSand from "../../assets/images/material/soleSand.png";
import SoleBlack from "../../assets/images/material/soleBlack.png";
import SoleRoyalBlue from "../../assets/images/material/soleRoyalBlue.png";
import SoleRed from "../../assets/images/material/soleRed.png";

const Layout = () => {
  const [currDrop, setCurrDrop] = useState(1);
  const [loading, setLoading] = useState(true);

  const [shoeColor, setShoeColor] = useState("0x202a34");
  const [soleColor, setSoleColor] = useState("0xdbdbd3");

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
    setCurrDrop((d) => d + 1);
  };

  const setSoleColorHandler = (color) => {
    if (soleColor !== color) {
      setSoleColor(color);
    }
    setCurrDrop((d) => d + 1);
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
          >
            <p>
              Ideal for summer shoes, this flexible chrome-tanned calfskin from
              Italy complements its supple hand with a short nap that adds a
              touch of softness that stops just short of your usual suede. Just
              rub your hand against the Light Suede’s natural grain to bring out
              the richness of this texture.
            </p>
          </DropDown>
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
              palete={0x45311a}
              onClick={setShoeColorHandler}
            />
            <ColorPicker
              img={DarkBlue}
              text="Dark Blue"
              palete={0x202a34}
              onClick={setShoeColorHandler}
            />
            <ColorPicker
              img={LightGray}
              text="Light Gray"
              palete={0xd5d0cc}
              onClick={setShoeColorHandler}
            />
                <ColorPicker
              img={Cognac}
              text="Cognac"
              palete={0x91411d}
              onClick={setShoeColorHandler}
            />
                <ColorPicker
              img={Chocolate}
              text="Chocolate"
              palete={0x3e2521}
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
              palete={0xc19659}
              onClick={setSoleColorHandler}
            />
             <ColorPicker
              img={SoleBlack}
              text="Black"
              palete={0x2a2927}
              onClick={setSoleColorHandler}
            />
            <ColorPicker
              img={SoleRoyalBlue}
              text="Royal Blue"
              palete={0x143560}
              onClick={setSoleColorHandler}
            />
            <ColorPicker
              img={SoleRed}
              text="Red"
              palete={0xd22527}
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
          <Button />
        </div>

        <div className={classes.Bottom}></div>

        <div className={classes.Right}></div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
