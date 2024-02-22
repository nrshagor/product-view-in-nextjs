"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../style/productdata.scss";

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
    <div className="product-container">
      <h1> Showing All Product </h1>
      <div className="product-list">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img
              src={item.pictures}
              alt={item.title}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-title">Title: {item.title}</p>
              <p className="product-text">Price: {item.price}</p>
              <p className="product-text">Status: {item.status}</p>
              <p className="product-text">
                Target Price 1: {item.targetPrice1}
              </p>
              <Link
                href={`/ProductsData/${item.id}`}
                passHref
                className="detailsbtn"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
