import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({addFood}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, image, calories, servings}
        console.log(newFood);
        // call addFood function from prop and pass new food as a argument so can be access into parent
        addFood(newFood)
        // Reset the state
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }
    
    return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput}/>

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
