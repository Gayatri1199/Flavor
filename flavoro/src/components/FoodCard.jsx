import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


const FoodCardStyle = styled.div`

  width:100%;
  cursor:pointer;
  margin-bottom:16px;
  @media screen and (min-width:768px){
    max-width:calc(100%/2 - 40px);
  }
   @media screen and (min-width:1260px){
    max-width:calc(100%/4 - 40px);
  } 
  img{
    width:100%;
    height:100%;
    mix-blend-mode:multiply;
  }

  .img-content{
   
    margin-bottom:20px;
    @media screen and (min-width:768px){
    height:auto;
    width:auto;
  }

   @media screen and (min-width:1260px){
    height:304px;
  }

  }
  .upper-content{
    display:flex;
    margin-bottom:20px;
    align-items:center;
    justify-content:space-between;
 
    span{
      font-size:20px;
      white-space:nowrap;
    }
  }

  .content{
    p{
      max-height:100px;
      overflow:hidden;
      display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
      margin-bottom:16px;
      &.showDesc{
        display: block;
      }
    }
  }

  .ratings{
    display:flex;
    justify-content:space-between;
    align-items:center;
    i{
      color:#FFD700;
    }

    button{
      background:#fd5304;
      color:#fff;
      padding:10px 15px;
      border-radius:30px;
      border:none;
      font-size:16px;
      cursor:pointer;

    }
  }

`;


const FoodCard = ({item}) => {
 const {id,img,name,price,desc,rating} = item
 const [showDesc,setShowDesc] = useState(false);
 const dispatch = useDispatch();
  const HandleToast=(name)=>{
        toast.success(`Added ${name} to the Cart`)
  }
  return (
    <FoodCardStyle>
      <div className='img-content'><img src={img} alt="Food Image"/></div>
        
        <div className='content'>
          <div className='upper-content'> <h3>{name}</h3>
            <span>₹ {price}</span></div>
           
            <p className={`${showDesc ? "showDesc" :""}`}>{desc}</p><span onClick={()=>{setShowDesc(!showDesc)}}>Read {showDesc ? "Less" :"More"}</span>
            <div className='ratings'>
              <span><i class="fa-solid fa-star"></i>{rating}</span> <button onClick={()=> 
              {
                dispatch(addToCart({ id, name, price, rating,img,qty:1 }));
                HandleToast(name);
              }
            }
                
                >Add to Cart</button></div>
        </div>
    </FoodCardStyle>
  )
}

export default FoodCard