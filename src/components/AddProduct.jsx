// NewItem.js
import React, { useState } from "react";
import { useEffect } from "react";
import Item from "../models/Item";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

import "../css/addProduct.css";

export default function AddProduct() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(new Item());
  const navigate = useNavigate();
  const newItem = new Item();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    form.postedAt = new Date();
    form.author = localStorage.getItem("username");
    form.id = Date.now().toString();
    Object.assign(newItem, form);
    localStorage.setItem("newItem", JSON.stringify(newItem));

    setItems(items.push(newItem));
    localStorage.setItem("products", JSON.stringify(items));
    navigate("/home");
  }

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setItems(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  function back() {
    navigate("/home");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form?.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={form?.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="price"
          type="number"
          value={form?.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          name="image"
          value={form?.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button type="submit">Add Item</button>
      </form>
    </>
  );
}
