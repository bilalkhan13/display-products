import React from "react";
import { useEffect, useState } from "react";
import FormattedDate from "../components/FormattedDate";
import Header from "../components/Header";
import "../css/displayProduct.css";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/images/noImage.png";

export default function DisplayProduct() {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      const storedProduct = localStorage.getItem("selectedProduct");
      if (storedProduct) {
        setProduct(JSON.parse(storedProduct));
      }
    } else {
      navigate("/");
    }
  }, []);

  function back() {
    navigate("/home");
  }

  return (
    <>
      <button
        onClick={() => {
          back();
        }}
        className="back-button"
      >
        &#8592; Back
      </button>
      <div className="product-display">
        <img
          src={product?.image ? product?.image : noImage}
          alt={product?.title}
          className="product-image"
        />
        <h2 className="product-name">{product?.title}</h2>
        <p className="product-description">{product?.description}</p>
        <p className="product-description">{product?.author}</p>
        <p className="product-postedAt">
          {" "}
          <FormattedDate date={product?.postedAt} />
        </p>
        <p className="product-price">${product?.price?.toFixed(2)}</p>
      </div>
    </>
  );
}
