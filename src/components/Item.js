import React, {useState} from "react";

function Item({ name, category }) {

// PseudoCode

// Needs to be an event handler onClick
// pass {function} through this handler that:
    // checks an if statement
      // changes string assigned to className to "in-cart" if useState = true
      // ELSE useState = False and variable assigned to string assigned to className is ""

  const [inCart, setCartStatus] = useState(false)     
  const addToCart = () => {
    return setCartStatus(!inCart);
}

  return (

    <li className = {inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {addToCart}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
