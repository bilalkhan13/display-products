import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/images/noImage.png";
import "../css/homepage.css";

export default function Homepage({ updateHeader }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    updateHeader({ showHeader: true });

    if (!localStorage.getItem("username")) {
      return navigate("/");
    }

    if (!localStorage.getItem("products")) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://tech.pixelandtexel.com/static/technical-test-data/items.json"
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData.items);
          localStorage.setItem("products", JSON.stringify(jsonData.items));

          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setData(JSON.parse(localStorage.getItem("products")));
      console.log(data);
      setLoading(false);
    }
  }, [updateHeader]);

  function selectItem(product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/product");
  }

  function addProduct() {
    navigate("/add-product");
  }

  return (
    <>
      <button className="add-product" onClick={() => addProduct()}>
        Add Product
      </button>
      <div className="products-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {data?.map((item, index) => (
              <li
                className="product-card"
                key={index}
                onClick={() => selectItem(item)}
              >
                <img
                  className="product-image"
                  src={item.image ? item.image : noImage}
                  alt="Product Image"
                />
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-author">{item.author}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
