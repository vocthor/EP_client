import React, { useState } from "react";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Menu du self</h1>
        {/* <object data="C:\Users\Hugo\Downloads\Menu-50.pdf" type="application/x-pdf" title="SamplePdf" alt="MenuSelf" height="450">
        </object> */}
        <a href="../Menu-50 (4).pdf">
        <button onclick="window.location.href = '../Menu.pdf';">Menu du self</button>
        </a>

    </div>
  );
};


export default Menu;