import { useEffect, useState } from "react";
import React from "react";

const AllProducts = () => {
  let [products, setProducts] = useState([]);
  let [filterproducts, setFilteredProducts] = useState([]);

  async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
    setFilteredProducts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else if (category === "men") {
      setFilteredProducts(
        products.filter((item) => item.id >= 1 && item.id <= 4)
    );
    } else if (category === "jewelry") {
      setFilteredProducts(
        products.filter((item) => item.id >= 5 && item.id <= 8)
      );
    } else if (category === "electronic") {
      setFilteredProducts(
        products.filter((item) => item.id >= 9 && item.id <= 14)
      );
    } else if (category === "women") {
      setFilteredProducts(
        products.filter((item) => item.id >= 15 && item.id <= 20)
      );
    }
  };

  return (
    <center>
      <h1 style={{ backgroundColor: "blue", textDecoration: "underline" }}>
        PRODUCTS
      </h1>

      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "green",
          width: "8%",
          margin: "10px",
        }}
        onClick={() => handleFilter("all")}>
        All
      </button>
      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "green",
          width: "8%",
          margin: "10px",
        }}
        onClick={() => handleFilter("men")}>
        Men's Clothing
      </button>
      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "green",
          width: "8%",
          margin: "10px",
        }}
        onClick={() => handleFilter("women")}>
        Women's Clothing
      </button>
      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "green",
          width: "8%",
          margin: "10px",
        }}
        onClick={() => handleFilter("electronic")}>
        Electronics
      </button>
      <button
        style={{
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "green",
          width: "8%",
          margin: "10px",
        }}
        onClick={() => handleFilter("jewelry")}>
        Jewelry
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {filterproducts.map((value) => (
          <section
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "lavendar",
              width: "250px",
            }}
            key={value.id}>
            <img
              src={value.image}
              alt="product"
              style={{ height: "200px", width: "250px" }}
            />
            <p>
              Title:{" "}
              {value.title.length > 25
                ? value.title.slice(0, 25) + "..."
                : value.title}
            </p>
            <p>Price: ${value.price}</p>
            <p title={value.rating.count + "👍👍👍"}>
              Rating: {value.rating.rate}
            </p>
          </section>
        ))}
      </div>
    </center>
  );
};

export default AllProducts;
