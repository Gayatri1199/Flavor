import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FoodData from '../data/FoodData';

const CategoryMenuStyle = styled.div`
    max-width:670px;
    margin:auto;
    position:relative;
    z-index:1;
    display:flex;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
    .category{
        width:90px;
        height:90px;
        padding:15px;
        background:#fff;
        border-radius:100%; 
        cursor:pointer;
        &:hover{
            img{
                scale:1.2;
            }
        }  
        img{
            border-radius:100%; 
            transition:0.5s all ease-in-out;
        } 
        
        span{
            display:block;
            margin-top:16px;
            font-weight:700;
        }
    }
`;

const CategoryMenu = () => {
    const [categories,setCategories] = useState([]);
    const listUniqueCategories = ()=>{
        const uniqueCategories = [...new Set(FoodData.map((food)=>food.category))];
        setCategories(uniqueCategories);
        console.log("ABC",categories,uniqueCategories)
    }

    useEffect(()=>{
        listUniqueCategories();

    },[])
  return (
    <CategoryMenuStyle>
        {categories.map((category,index)=>{
            return(<div className='category' key={index}>
            <img src="https://mozzu-html.themedox.com/assets/img/home-1/popular-items1.jpg" alt='Category Image'/>
            <span>{category}</span>
        </div>);
        })}
       
    </CategoryMenuStyle>
  )
}

export default CategoryMenu