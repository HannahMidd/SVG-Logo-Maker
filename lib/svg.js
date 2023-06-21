class SVG {
  constructor() {
    this.textE = "";
    this.shapeE = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeE}${this.textE}</svg>`;
  }

  setText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must be less than 3 characters");
    }
    this.textE = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.shapeE = shape.render();
  }
}

module.exports = SVG;
