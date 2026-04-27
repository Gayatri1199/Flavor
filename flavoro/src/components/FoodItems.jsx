import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';


const FoodItemsStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
   
    row-gap:0;
    margin-top:40px;
    @media screen and (min-width:768px){
         gap:70px;
    }
    @media screen and (min-width:1260px){
         gap:50px;
    }
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
 
  return (
    <FoodItemsStyle>
        <h2>Super Delicious Deal</h2>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        {
            FoodData.filter((foodItem)=>{
              
                if(category==="All"){
                     
                    return foodItem.name.toLowerCase().includes(search.toLowerCase());
                    
                }else{
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