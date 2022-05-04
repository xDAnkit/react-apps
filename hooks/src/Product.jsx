import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Line 9", data);
        setProduct([...data]);
      });
  }, []);
  return (
    <>
      <table>
        <tr>
          <td>
            Product
            {product.map((item) => {
              console.log("LN13", item);
              return (
                <div>
                  <div key={item.id}>{item.title}</div>
                  <button>Add to cart</button>
                </div>
              );
            })}
          </td>
        </tr>
        <tr>
          <td>
            Cart
            {product.map((item) => {
              console.log("LN13", item);
              return (
                <div>
                  <div key={item.id}>{item.title}</div>
                  <button>Add to cart</button>
                </div>
              );
            })}
          </td>
        </tr>
      </table>

      <Card />
    </>
  );
}
