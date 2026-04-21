import React from 'react'
import heroBg from '../assets/hero-bg1.webp'
import heroBgfirst from '../assets/home-shape-start.webp'
import heroBgEnd from '../assets/home-shape-end.webp'
import styled from 'styled-components';
import CategoryMenu from './CategoryMenu';

const HeroBannerStyle = styled.div`
position:relative;
img{
    width:100%;
}
.hero-banner{
    position:relative;
    overflow:hidden;
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
                font-size:50px;
                font-weight:800;
            }
    }
    
    .hero-bg-first{
           width: 40%;
            position: absolute;
            left: -120px;
            bottom: -60px;
    }

    .hero-bg-last{
        width:30%;
        position:absolute;
        right:0;
        bottom:0;
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
`;
const HeroBanner = () => {
  return (
    <HeroBannerStyle> 
    <div className='hero-banner'>
        <div className='content'>
             <h4>Explore top-rated attractions, activities and more</h4>
             <h2>Fast Delivery. Zero Hassle.</h2>
             <div className='input-section'>
                <i class="fa-solid fa-location-crosshairs"></i>
                <input type='search' name="search" id="" placeholder='Search Here' autoComplete='off'/>
                <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
            </div>
            <div className='category-section'>
                <CategoryMenu/>
            </div>
             
        </div>
        <img src={heroBg} alt="hero banner" />
        <img src={heroBgfirst} alt="hero banner" className='hero-bg-first'/>
        <img src={heroBgEnd} alt="hero banner" className='hero-bg-last'/>
        </div>
    </HeroBannerStyle>
  )
}

export default HeroBanner