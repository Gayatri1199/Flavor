import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const FoodItemsStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:60px;
    row-gap:0;
    margin-top:40px;
    h2{
        width:100%;
        font-size:34px;
    }
`;

const FoodItems = () => {
    const category = useSelector((state)=>state.category.category)
    console.log("Cat==>",category);
  return (
    <FoodItemsStyle>
        <h2>Super Delicious Deal</h2>
        {
            FoodData.filter((foodItem)=>{
                console.log("FoodItems==>",foodItem);
                if(category==="All"){
                      console.log("FoodItems==> in if",foodItem);
                     
                    return foodItem;
                    
                }else{
                      console.log("FoodItems==> in else",foodItem);
                    return category===foodItem.category;
                }
            }).map((foodItem)=>{
                return <FoodCard item={foodItem} key={foodItem.id}/>
            })
        }

        {/* {
            FoodData.map((foodItem)=>{
                return <FoodCard item={foodItem} key={foodItem.id}/>
            })
        } */}
        </FoodItemsStyle>
  )
}

export default FoodItems