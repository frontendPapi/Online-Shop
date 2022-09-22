import React, { useEffect, useState } from "react";

function Header({handleClick}) {
  const [data, setData] = useState([]);
  const doFetch = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    doFetch();
  },[]);

  

  return (
    <div>
      <div className="header-container">
      <div className="header-btn" onClick={()=>handleClick('all')}>All</div>
        {data.map((item, index) => {
          return <div onClick={()=>handleClick(item)} className="header-btn" key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default Header;
