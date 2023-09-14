// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Search from "./Search/Search";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/Ai";
import "./Header.scss";
import Cart from "./../Cart/Cart";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="left">
          <h2>Dev Store.</h2>
        </div>
        <ul className="center">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="right">
          <TbSearch></TbSearch>
          <AiOutlineHeart></AiOutlineHeart>
          <span className="cart-icon">
            <CgShoppingCart></CgShoppingCart>
            <span>6</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
