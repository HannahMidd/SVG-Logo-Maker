// cli.js contains all message prompts and required items to run the SVG logo maker

const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square, Star } = require("./shapes")
const { WriteFile } = require("fs/promises")

class CLI {
  run() {
    return inquirer
.prompt([
  {
    name: "text",
    type: "input",
    message: "Enter up to 3 characters for your logo:",
    validate: (text) =>
    text.length <= 3 || "Text must be 3 characters or less"
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color (or hexidecimal number)",
  },
   {
    name: "shapeColor",
    type: "input",
    message: "Enter a shape color (or hexidecimal number)",
  },
  {
    name: "shapeType",
    type: "list",
    message: "Select a shape using the arrows",
    choices: ["circle", "square", "triangle", "star"],
  },

])
.then(({text, textColor, shapeColor, shapeType}) => {
  let shape;
  switch (shapeType) {
    case "circle":
      shape = new Circle();
      break;

    case "square":
      shape = new Square();
      break;
      
    case "triangle":
      shape = new Triangle();
      break;

    default:
      shape = new Star();
      break;
  }

  shape.setColor(shapeColor);

  const svg = new SVG();
  svg.setText(text, textColor);
  svg.setShape(shape);
  return WriteFile("logo.svg", svg.render());
})

.then(() => {
  console.log("Yay! Generated your logo in logo.svg");
})
.catch((error) => {
  console.log(error);
  console.log("Ruh Roh!! Something went wrong");
});
  }
}

module.exports = CLI;