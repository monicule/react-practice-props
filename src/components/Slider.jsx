import SliderComponent from "./SliderComponent"
import { useState } from "react"

export default function Slider() {
    const [inputValue, setInputValue] = useState(0)
    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    }

    let bgColor;
    let textColor;

    if(inputValue>25) {
        bgColor = "red"
        textColor = "blue"
    }

    if(inputValue>25 && inputValue<50) {
        bgColor = "green"
        textColor = "purple"
    }

    if(inputValue>50 && inputValue<75) {
        bgColor = "blue"
        textColor = "white"
    }

    if(inputValue>75 && inputValue<100) {
        bgColor = "red"
        textColor = "black"
    }

return (
    <div>
        <SliderComponent inputValue={inputValue} handleInputChange={handleInputChange} backgroundColor={bgColor} textColor={textColor}/>
    </div>
)

}
