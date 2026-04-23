import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';


const FoodItemsStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:50px;
    row-gap:0;
    margin-top:40px;
    h2{
        width:100%;
        font-size:34px;
    }
`;

const FoodItems = () => {
    const category = useSelector((state)=>state.category.category);
    const search =  useSelector((state)=>state.search.search);
    const HandleToast=()=>{
        toast.success("Item Added to the Cart")
    }
    console.log("Cat==>",search);
  return (
    <FoodItemsStyle>
        <h2>Super Delicious Deal</h2>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        {
            FoodData.filter((foodItem)=>{
                // console.log("FoodItems==>",foodItem);
                if(category==="All"){
                      console.log("FoodItems==> in if",foodItem.name.toLowerCase().includes(search.toLowerCase()));
                     
                    return foodItem.name.toLowerCase().includes(search.toLowerCase());
                    
                }else{
                      console.log("FoodItems==> in else",category===foodItem.category && foodItem.name.toLowerCase().includes(search.toLowerCase()));
                    return category===foodItem.category && foodItem.name.toLowerCase().includes(search.toLowerCase());
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