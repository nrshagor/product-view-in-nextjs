"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
function Page({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://groupyfy.com:8000/published-products/${params.productId}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);
  return (
    <div>
      <img src={data.pictures} alt={data.title} className="product-image" />
      <div className="product-info">
        <p className="product-title">Title: {data.title}</p>
        <p className="product-text">Price: {data.price}</p>
        <p className="product-text">Status: {data.status}</p>
        <p className="product-text">Target Price 1: {data.targetPrice1}</p>
      </div>
    </div>
  );
}

export default Page;
