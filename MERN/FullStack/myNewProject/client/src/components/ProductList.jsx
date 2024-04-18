import React from "react";

const ProductList = (props) => {
  return (
    <div>
      {props.Prod.map((prod, i) => {
        <p key={i}>
          {prod.title},{prod.price},{prod.description}
        </p>;
      })}
    </div>
  );
};

export default ProductList;
