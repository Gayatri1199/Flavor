import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


const FoodCardStyle = styled.div`
  max-width:300px;
  width:100%;
  cursor:pointer;
  margin-bottom:16px;
  img{
    width:100%;
    height:100%;
    mix-blend-mode:multiply;
  }

  .img-content{
    height:250px;
    width:300px;
    margin-bottom:20px;

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
           
            <p>{desc}</p><span>Read More</span>
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