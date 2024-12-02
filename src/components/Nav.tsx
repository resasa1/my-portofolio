import React, { useEffect, useState } from "react";

export default function Nav() {
  // Set default color to white
  const [color, setColor] = useState("#FFFFFF");

  // const palleteColor = {
    
  // }

  const colorOptions = {
    white: "#FBFAF5",
    red: "#fcf2f2",
    blue: "#f2f4fc",
    green: "#f3fcf2",
    yellow: "#fcfcf2",
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.transition = "background-color 0.5s ease";
    bodyStyle.backgroundColor = color;
    const colorName = Object.keys(colorOptions).find(
      (key) => colorOptions[key] === color
    );
    console.log(`color changed to ${colorName}`);
  }, [color]);

  const listNav = [
    {
      title: "[p] project",
      url: "#",
    },
    {
      title: "[m] mini game",
      url: "#",
    },
    {
      title: "[c] connect",
      url: "#",
    },
  ];

  return (
    <div className="mt-6 ml-6 flex justify-between mb-8">
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
            className="border-solid border-2 border-slate-150 rounded-md p-2 hover:bg-slate-200"
            key={index}
          >
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
        {/* color selection */}
        <select className="border-solid border-2 border-slate-150 rounded-md"
          value={Object.keys(colorOptions).find(
            (key) => colorOptions[key] === color
          )}
          onChange={(e) => setColor(colorOptions[e.target.value])}
        >
          {Object.keys(colorOptions).map((colorName) => (
            <option key={colorName} value={colorName}>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
}
