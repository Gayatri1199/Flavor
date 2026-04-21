import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import styled from 'styled-components'

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
  return (
    <FoodItemsStyle>
        <h2>Super Delicious Deal</h2>
        {
            FoodData.map((foodItem)=>{
                return <FoodCard item={foodItem} key={foodItem.id}/>
            })
        }
        </FoodItemsStyle>
  )
}

export default FoodItems