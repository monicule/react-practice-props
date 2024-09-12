/* eslint-disable react/prop-types */

function SliderComponent({inputValue, handleInputChange, backgroundColor, textColor}) {

    const inputStyle= {
        appearance:"none",
        width: "100%",
        height: 25,
        cursor: "pointer",
        background: "lightgray"

    }
    return (
        <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 100
}}>

<input type="range" min={0} max={100} onInput={handleInputChange} value={inputValue} style={inputStyle}/>
<div className="circle" style={{
    
    color: !textColor ? "black" : textColor,
    background: !backgroundColor ? "lightgray" : backgroundColor,
    height: `${inputValue}px`,
    width: `${inputValue}px`,
    borderRadius: "50%"
}}>
    <span>{inputValue}</span>
</div>

        </div>
    )
}

export default SliderComponent