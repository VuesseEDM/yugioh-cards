import { useState } from "react";

function ToDoList () {
  const [inputValue, setInputValue] = useState("");
  const [items,setItems] = useState([]);

  const handleAddInput = () => {
    setItems([...items, inputValue]);
    setInputValue("");
    }
  const handleRemoveItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove))
  } 

  return (
    <div>
      <h1>My List</h1>
      <input
      type="text"
      placeholder="insert new Item"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}>
      </input>
      <button onClick={handleAddInput}>Add Item</button>

      <ul>
        {items.map((item,index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(item)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ToDoList;