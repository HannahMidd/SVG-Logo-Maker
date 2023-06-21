const { Circle, Triangle, Square, Star } = require("./shapes");

// ============= Circle Tests ====================

describe("Circle", () => {
  test("should create circle element", () => {
    const correctSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(correctSvg);
  });

  test("should accept shape color", () => {
    const correctSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
    const circle = new Circle();
    circle.setColor("red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});  

// ============= Triangle Tests ====================

describe("Triangle", () => {
  test("should create triangle element", () => {
    const correctSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
    const triangle = new Triangle();
    triangle.setColor("orange");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />';
    const triangle = new Triangle();
    triangle.setColor("yellow");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});


// ============= Square Tests ====================

describe("Square", () => {
  test("should create square element", () => {
    const correctSvg =
      '<rect x="90" y="40" width="120" height="120" fill="black" />';
    const square = new Square();
    square.setColor("black");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<rect x="90" y="40" width="120" height="120" fill="pink" />';
    const square = new Square();
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});

// ============= Star Tests ====================

describe("Star", () => {
  test("should create star element", () => {
    const correctSvg =
      '<rect x="90" y="40" width="120" height="120" fill="yellow" />';
    const square = new Square();
    square.setColor("yellow");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<rect x="90" y="40" width="120" height="120" fill="turquoise" />';
    const square = new Square();
    square.setColor("turquoise");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});

