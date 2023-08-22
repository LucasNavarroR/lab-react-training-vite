import { useState } from "react";

export default function LikeButton() {

const [counterValue, setCounterValue] = useState(0)
console.log()
let colors = ["purple", "blue", "green", "yellow", "orange", "red"];
let selectedColor = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };
const handleClick = () => {
    

   
    selectedColor =  {backgroundColor: colors[Math.floor(Math.random() * colors.length)]}
   
setCounterValue(counterValue +1)

}



  return <button onClick={handleClick} style={selectedColor}>{counterValue} Likes</button>;
}
