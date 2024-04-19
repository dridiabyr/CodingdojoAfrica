import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {props.Prod.map((prod, i) => {
        <p key={i}>
          <Link to={"/" + prod._id}> 
          {prod.title},{prod.price},{prod.description}
        
        </Link>
         <button onClick={(e)=>{deleteProduct(prod._id)}}>
         Delete
     </button>
     </p>;
      })}
    </div>
  );
};

export default ProductList;
