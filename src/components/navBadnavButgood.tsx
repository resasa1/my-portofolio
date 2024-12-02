// im not using it, but i'm lazy to delete it, so i'll just leave it here

import React, { useEffect, useState } from "react";

export default function Nav() {
  // Set default color to white
  const [color, setColor] = useState("#FFFFFF");

  const colorOptions = {
    white: "#FFFFFF",
    red: "#FF0000",
    blue: "#0000FF",
    green: "#008000",
    yellow: "#FFFF00",
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.transition = "background-color 0.5s ease";
    bodyStyle.backgroundColor = color;
    console.log("color changed");
  }, [color]);

  const listNav = [
    {
      title: "project",
      url: "#",
    },
    {
      title: "mini game",
      url: "#",
    },
    {
      title: "connect",
      url: "#",
    },
  ];

  const handleColorChange = (selectedColor) => {
    setColor(colorOptions[selectedColor]);
  };

  return (
    <div className="ml-6 flex justify-between mb-8">
      <a href="#">
        <img
          className="w-12 h-12 hover:pointer"
          src="https://imgs.search.brave.com/ReM8m4JFkSf5-qPJd_kKlhdRHic9OPdHxDwelLudY2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bnRzNWNyNWc3b2Q2/MS5wbmc_d2lkdGg9/MTE4MiZmb3JtYXQ9/cG5nJmF1dG89d2Vi/cCZzPWJmNGI1NGUw/NDc3YTZhOGM4MDJi/NTYwYTEyYmU2NmU5/NTRiY2YzOTY"
          alt="globally"
        />
      </a>
      <ul className="flex gap-4 sticky">
        {listNav.map((item, index) => (
          <li
            className="border-none bg-slate-200 rounded-md p-2 hover:bg-slate-50"
            key={index}
          >
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
        {/* color selection */}
        <div className="relative flex items-center">
          <div className="flex gap-2">
            {/* Color palette next to the select */}
            {Object.keys(colorOptions).map((colorName) => (
              <div
                key={colorName}
                className="w-8 h-8 rounded-full cursor-pointer"
                style={{
                  backgroundColor: colorOptions[colorName],
                  border: color === colorOptions[colorName] ? "3px solid black" : "none",
                }}
                onClick={() => handleColorChange(colorName)} // Change the color when clicked
              ></div>
            ))}
          </div>

          {/* Dropdown for color selection */}
          <select
            value={Object.keys(colorOptions).find(
              (key) => colorOptions[key] === color
            )}
            onChange={(e) => handleColorChange(e.target.value)}
            className="ml-4 p-2 border rounded-md"
          >
            {Object.keys(colorOptions).map((colorName) => (
              <option key={colorName} value={colorName}>
                {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </ul>
    </div>
  );
}
