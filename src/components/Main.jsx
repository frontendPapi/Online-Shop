import React, { useEffect, useState } from "react";

function Main({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const doFetch = async () => {
    setLoading(true)
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {setData(json); setLoading(false)});
  };

  useEffect(() => {
    doFetch();
  }, []);

  useEffect(() => {
    doFetch();
  }, [url]);
  if(loading){
    return <div className="loading">Loading...</div>
  }
  if(data.length){

      return (
        <div className="main-container">
          {data.map((item) => {
            return (
              <div className="main-card">
                <div className="main-title">{item.title}</div>
                <img src={item.image} alt="ugbju" className="main-img" />
                <div className="main-desc">{item.description}</div>
                <div className="price-rating-container">
                  <div className="main-price">{item.price}</div>
                  <div className="main-rating">{item.rating.rate}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
  return <div>Nothing to display</div>

}

export default Main;
