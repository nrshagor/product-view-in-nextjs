"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../style/productdata.css";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://groupyfy.com:8000/published-products/"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="api-container">
      <h1>API Data</h1>
      <div className="api-list">
        {data.map((item) => (
          <div className="api-item" key={item.id}>
            <img src={item.pictures} alt={item.title} className="api-image" />
            <div>
              <p className="api-title">Title: {item.title}</p>
              <p className="api-text">Price: {item.price}</p>
              <p className="api-text">Status: {item.status}</p>
              <p className="api-text">Target Price 1: {item.targetPrice1}</p>
              <Link href={`/ProductsData/${item.id}`} passHref>
                {" "}
                see
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
