import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FoodData from '../data/FoodData';
import {useDispatch, useSelector} from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

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
        &.active{
            span{
                font-weight:bold;
            }
        }
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
        console.log("ABC",categories);
    },[])

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.category.category)
    console.log("SC",selectedCategory)
  return (
    <CategoryMenuStyle>
       <div className={`category ${selectedCategory === "All" ? "active" : ""}`}   onClick={() => dispatch(setCategory("All"))}>
            <img src="https://mozzu-html.themedox.com/assets/img/home-1/popular-items1.jpg" alt='Category Image'/>
            <span>All</span>
            </div>
        {categories.map((category,index)=>{
            return(<div className={`category ${selectedCategory === category ? "active" : ""}`} key={index} onClick={()=>{dispatch(setCategory(category))}}>
            <img src="https://mozzu-html.themedox.com/assets/img/home-1/popular-items1.jpg" alt='Category Image'/>
            <span>{category}</span>
        </div>);
        })}
       
    </CategoryMenuStyle>
  )
}

export default CategoryMenu