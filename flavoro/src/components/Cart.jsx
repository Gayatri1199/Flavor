import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decrementQty, incrementQty, removeFromCart } from "../redux/slices/CartSlice";
import { closeCart } from "../redux/slices/uiSlice";

const CartStyle = styled.div`
  width: 450px;
  height: 100vh;
  position: fixed;
  background: #fff;
  top: 0;
  right: -1000px;
  z-index: 1;
  &.active{
    right:0px;
  }





  h2{
    font-size:24px;
    padding:16px;
    border-bottom:1px solid #e7e7e9;
  }

  .item-card{
    padding:16px;
    display:flex;
    gap:16px;
    .image-section{
      max-width:100px;
      max-height:100px;
      padding:8px;
      img{
        width:100%;
        height:100%;
      }
    }
  }

  .content-section{
    width:100%;
  }

  h3{
    display:flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
    i{
      color:red;
      cursor:pointer;
    }
  }

  .qty{
    display:flex;
    gap:8px;
  }

  .btn{
    width:100%;
    padding:8px 16px;
    color:#fff;
    background:#fd5304;
    text-align:center;
    border-radius:8px;
    border:none;
  }

  .total{
    padding:16px;
  }

  .qty{
    span{
      cursor:pointer;
    }
  }

`;

const Cart = () => {
 
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)
   const totalPrice = cartItems.reduce((totalPrice,item)=>totalPrice+item.qty*item.price,0)
  // const cartItems = useSelector((state) => state);
  console.log("Items from Cart==>", cartItems,totalQty);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);
 

  return (
  <CartStyle className={`${isCartOpen ? "active" : ""}`}>
    <h2>{totalQty} Item{totalQty>1?"s":""}</h2>
    {cartItems.map((cartItem) => (
     <div key={cartItem.id} id={cartItem.id} className="item-card">{
        <><div className="image-section">
          <img src={cartItem.img} alt={cartItem.name} />
        </div>
        <div className="content-section">
          <h3><span>{cartItem.name} </span><i class="fa-solid fa-trash-can" onClick={()=>{dispatch(removeFromCart({ id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      rating: cartItem.rating,
      img: cartItem.img,
      qty: cartItem.qty, }))}}></i></h3>
          <p>₹ {cartItem.price}</p>
          <div className="qty">
            <span className="dec" onClick={() => {
    cartItem.qty > 1
      ? dispatch(decrementQty({ id: cartItem.id }))
      : (cartItem.qty = 1);
  }}>-</span>
            <span>{cartItem.qty}</span>
            <span className="inc" onClick={()=>{dispatch(incrementQty({id:cartItem.id}))}}>+</span>
          </div>
        </div>
        </>
     }</div>
    ))}
    <div className="total">
      <div className="">Total Items:{totalQty}</div>
       <div className="">Total:₹ {totalPrice}</div>
      <button className="btn" onClick={() => dispatch(closeCart())}>Checkout</button>
    </div>
  </CartStyle>
);
};

export default Cart;
