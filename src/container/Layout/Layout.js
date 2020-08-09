import React, {useState} from "react";
import classes from "./Layout.module.scss";

import Header from "../../components/Header/Header";
import Three from "../../Three/Three";
import DropDown from "../../components/DropDown/DropDown";
import Button from '../../components/Button/Button'

const Layout = () => {
  const [currDrop,setCurrDrop] = useState(0);

  const setDrop = (n) => {
    if(n !== currDrop){
      setCurrDrop(n)
    }else setCurrDrop(0)
  
  }

  return (
    <div className={classes.Layout}>
      <Header />
      <Three />
      <div className={classes.Drop}>
        <DropDown text="Product Information" active={currDrop === 1} onClick={setDrop.bind(this,1)}/>
        <DropDown text="Leather" active={currDrop === 2} onClick={setDrop.bind(this,2)} />
        <DropDown text="Sole"  active={currDrop === 3} onClick={setDrop.bind(this,3)}/>
        <DropDown text="Personalization" active={currDrop === 4} onClick={setDrop.bind(this,4)}/>
        <DropDown text="Accessories" active={currDrop === 5} onClick={setDrop.bind(this,5)}/>
      </div>
      <Button />
    </div>
  );
};

export default Layout;
