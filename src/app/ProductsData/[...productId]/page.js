"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./details.scss";
function Page({ params }) {
  const [data, setData] = useState(null);

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
    <div className="details-setion">
      {data && (
        <div className="details-container">
          <h1>Product Details</h1>
          <div className="product-info">
            <div className="left">
              <img
                src={data.product.shippableProduct.pictures.list[0]}
                alt={data.product.shippableProduct.title}
                className="product-image"
              />
            </div>
            <div className="right">
              <p>ID: {data.id}</p>
              <p>Title: {data.product.shippableProduct.title}</p>
              <p>Brand: {data.product.shippableProduct.brandName}</p>
              <p>Product Type: {data.product.shippableProduct.productType}</p>
              <p>Category: {data.product.shippableProduct.category}</p>
              <p>Subcategory: {data.product.shippableProduct.subcategory}</p>
              <p>Subcategory 2: {data.product.shippableProduct.subcategory2}</p>
              <p>Subcategory 3: {data.product.shippableProduct.subcategory3}</p>
              <p>Description 1: {data.product.shippableProduct.description1}</p>
              <p>Description 2: {data.product.shippableProduct.description2}</p>
              <p>
                Manufacturer SKU:{" "}
                {data.product.shippableProduct.manufacturerSku}
              </p>
              <p>Seller SKU: {data.product.shippableProduct.sellerSku}</p>
              <p>UPC: {data.product.shippableProduct.upc}</p>
              <p>
                Specifications:{" "}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.product.shippableProduct.specifications,
                  }}
                />
              </p>
              <p>
                Additional Notes:{" "}
                {data.product.shippableProduct.additionalNotes}
              </p>
              <p>
                Is Refurbished: {data.product.shippableProduct.isRefurbished}
              </p>
              <p>Notes 2: {data.product.shippableProduct.notes2}</p>
              <p>MSRP: {data.product.shippableProduct.msrp}</p>
              <p>Warranty: {data.product.shippableProduct.warranty}</p>
              <p>
                Manufacturer Country:{" "}
                {data.product.shippableProduct.manufacturerCountry}
              </p>
              <p>Price: {data.product.shippableProduct.price}</p>
              <p>In Stock: {data.inStock}</p>
              <p>Target Price 1: {data.targetPrice1}</p>
              <p>Target Price 2: {data.targetPrice2}</p>
              <p>Target Price 3: {data.targetPrice3}</p>
              <p>Max Sale Limit: {data.maxSaleLimit}</p>
              <p>Campaign ID: {data.campaign.id}</p>
              <p>Campaign Name: {data.campaign.name}</p>
              <p>Campaign End Date: {data.campaign.endDate}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
