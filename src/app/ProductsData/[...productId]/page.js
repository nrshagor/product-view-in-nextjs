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
  return (
    <div>
      <h1>Product Details {data.id}</h1>
    </div>
  );
}

export default Page;
