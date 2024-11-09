import React, { useEffect, useState } from "react";
import "./RandomColorGenerator.css";
import generateRandomNumber from "./utils/generateRandomNumber";

const RandomColorGenerator = () => {
  // Set Default Black Color
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("HEX");

  useEffect(()=>{
    typeOfColor === 'HEX' ? generateRandomHexColor(): generateRandomRGBColor()
  },[typeOfColor])

  const generateRandomHexColor = () => {

    const hexOptions = ['0', '1' , '2', '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'A' , 'B' , 'C' , 'D' , 'E'];

    let hexColor = '#';

    for (let index= 0 ; index < 6 ; index++){
      hexColor += hexOptions[generateRandomNumber(hexOptions.length)];
    }

    setColor(hexColor)

  }

  const generateRandomRGBColor = () => {

    const r = generateRandomNumber(255);
    const g = generateRandomNumber(255);
    const b = generateRandomNumber(255);

    const hexColor = `rgb(${r},${g},${b})`;

    setColor(hexColor);

  }

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("HEX");
        }}
      >
        Generate Hex Code
      </button>
      <button
        onClick={() => {
          setTypeOfColor("RGB");
        }}
      >
        Generate RGB Color
      </button>
      <button  onClick={() => {
        typeOfColor === 'HEX' ? generateRandomHexColor() : generateRandomRGBColor()
        }}
        >Generate a Random Color</button>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: '100px',
        flexDirection: 'column',
        height: '100%',
        color: '#fff'
      }}>

        <h3>
          {typeOfColor === 'HEX'? 'Hex Color' : 'RGB Color'}
        </h3>

        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
