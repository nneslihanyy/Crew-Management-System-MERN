import React, { useState ,useEffect} from "react";

import Header from "../components/Layout/Header/Header";
import Proptypes from "prop-types";
import Search from "../components/Modals/Search/Search";

const MainLayout = ({ children }) => {
const [isSearchShow,setIsSearchShow]= useState(false);
const [isDialogShow, setIsDialogShow] = useState(false)
useEffect(() => {
  const dialogStatus = localStorage.getItem("dialog")
    ? JSON.parse(localStorage.getItem("dialog"))
    : localStorage.setItem("dialog", JSON.stringify(true));

  setTimeout(() => {
    setIsDialogShow(dialogStatus);
  }, 2000);
}, []);
  return (
    <div className="main-layout">
      <Header setIsSearchShow={setIsSearchShow}/>
      {children}
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
