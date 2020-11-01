import React from "react";
import "./Product.css";
import {useStateValue} from './../../StateProvider'
function Product({ id, title, rating, price, image }) {

  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket>>>", {basket})
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <span>{title}</span><br/>
        <span className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img">&#11088;</span>
            ))}
        </div>
        
      </div>
      <img src={image} alt="product image" className="product__image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
