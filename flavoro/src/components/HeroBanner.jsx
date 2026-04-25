import React from 'react'
import heroBg from '../assets/hero-bg1.webp'
import heroBgfirst from '../assets/home-shape-start.webp'
import heroBgEnd from '../assets/home-shape-end.webp'
import styled from 'styled-components';
import CategoryMenu from './CategoryMenu';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../redux/slices/uiSlice';
import { setSearch } from '../redux/slices/searchSlice';

const HeroBannerStyle = styled.div`
position:relative;
img{
    width:100%;
}
.hero-banner{
    position:relative;
    overflow:hidden;
    height:500px;
     @media screen and (min-width:768px){
        height:500px;
    }
    .content{
            position: absolute;
            width: 100%;
            text-align: center;
            margin-top: 100px;
            color:#fff;
            h4{
                font-size:24px;
            }
            h2{
                font-size:30px;
                font-weight:800;
                @media screen and (min-width:768px){
                     font-size:50px;
                }
            }
    }
    
    .hero-bg-first{
           width: 60%;
            position: absolute;
            left: -120px;
            bottom: -60px;
             @media screen and (min-width:1260px){
        
         width:30%;
        }
    }

    .hero-bg-last{
        width:50%;
        position:absolute;
        right:0;
        bottom:0;
        
         @media screen and (min-width:1260px){
        
         width:30%;
        }
    }

    .input-section{
            max-width:750px;
            width:100%;
            padding:10px;
            border-radius:30px;
            background:#fff;
            margin:20px auto;
            display:flex;
            align-items:center;
            position:relative;
            z-index:1;
            input{
                width:100%;
                border:none;
                font-size:16px;
                &:focus{
                    outline:none;
                }
            }
            i{
              color:#4b4b4b;
              font-size:24px;
              margin-right:10px;
            }
            button{
                    white-space: nowrap;
                    background: #ff5e15;
                    border: none;
                    border-radius: 30px;
                    padding: 10px;
                    display: flex;
                    color: #fff;
                    font-size: 16px;
                    align-items:center;
                i{
                    color:white;
                    font-size:16px;
                }
            }
    }
}

.cart{
    position: absolute;
    color: #fff;
    top: 16px;
    font-size: 25px;
    right: 16px;
}

.cart-icon{
    width:10px;
    height:10px;
    padding:10px;
    display:flex;
    background:#fff;
    border-radius:30px;
    position: absolute;
    top: 16px;
    right: 16px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.hero-bg{
     height:100%;
        object-fit:cover;
    @media screen and (min-width:768px){
        height:100%;
        object-fit:cover;
    }
}
`;
const HeroBanner = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0);
    const dispatch = useDispatch();
  return (
    <HeroBannerStyle> 
    <div className='hero-banner'>
        <span className='cart-icon' onClick={()=>{dispatch(openCart())}}><i class="fa-solid fa-cart-shopping cart"></i> <span>{totalQty}</span></span>
        
        <div className='content'>
             <h4>Explore top-rated attractions, activities and more</h4>
             <h2>Fast Delivery. Zero Hassle.</h2>
             <div className='input-section'>
                <i class="fa-solid fa-location-crosshairs"></i>
                <input type='search' name="search" id="" placeholder='Search Here' autoComplete='off' onChange={(e)=>{dispatch(setSearch(e.target.value))}}/>
                <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
            </div>
            <div className='category-section'>
                <CategoryMenu/>
            </div>
             
        </div>
        <img src={heroBg} alt="hero banner" className='hero-bg'/>
        <img src={heroBgfirst} alt="hero banner" className='hero-bg-first'/>
        <img src={heroBgEnd} alt="hero banner" className='hero-bg-last'/>
        </div>
    </HeroBannerStyle>
  )
}

export default HeroBanner