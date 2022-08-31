import './App.css';
import { Row, Divider, Button } from 'antd';
import { useState } from "react";
import foodDataFromJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';
import SearchFoods from './components/SearchFoods';

const JSONdataWithId = foodDataFromJSON.map(({name, image, calories, servings}) => {
  return {id: uuidv4(), name, image, calories, servings}
})

function App() {
  const [foods, setFoods] = useState(JSONdataWithId);
  const [foodsData, setFoodsData] = useState(JSONdataWithId);

  console.log(foods)

  const addFood = (newFood) => {
    // push newFood to foods array
    const foodArrayWithNewFood = [...foods, newFood];
    const updateFoodWithNewFood = [...foodsData, newFood];
    // update the state
    setFoods(foodArrayWithNewFood);
    setFoodsData(foodsData)
  }
  // search food
  const searchFoodList = (str) => {
    let filteredFoods;
    
    if (str === "") {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setFoods(filteredFoods);
  };
  // delete food
  const handleDeleteFood = (id) => {
    const foodCopy = [...foods];
    const updateFoodList = foodCopy.filter((food) => food.id !== id)
    setFoods(updateFoodList);
  }

   return (
    <div className="App">
      {/* <Button> Hide Form / Add New Food </Button> */}
      {/* <AddFoodForm foods={foods} setFoods={setFoods}/> */}

      {/* addfoods={addFood} passing callback function*/}
      <AddFoodForm foods={foods} addFood={addFood}/>

      {/* Display Search component here */}
      <SearchFoods filterSearchFoods = {searchFoodList}/>

      <Divider>Food List</Divider>

        {foods.map((food) => {
          return(
            <Row style={{ width: '100%', justifyContent: 'center' }}>
              <FoodBox key={food.id} food={food} handleDeleteFood = {handleDeleteFood}/>
              {/* <FoodBox key={food.id}  food={food}/> */}
            </Row>
          )
        })}      
    </div>
  );
}

export default App;