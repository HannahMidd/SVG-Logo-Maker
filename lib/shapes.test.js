// shapes.test.js contains all test to ensure that the code is running correctly

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
      '<rect x="65" y="15" width="170" height="170" fill="black" />';
    const square = new Square();
    square.setColor("black");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<rect x="65" y="15" width="170" height="170" fill="pink" />';
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
      '<polygon points="120 60 130 100 170 100 140 120 155 150 120 130 85 150 100 120 70 100 110 100" fill="yellow" />';
    const star = new Star();
    star.setColor("yellow");
    const actualSvg = star.render();
    expect(actualSvg).toEqual(correctSvg);
  });
  test("should accept shape color", () => {
    const correctSvg =
      '<polygon points="120 60 130 100 170 100 140 120 155 150 120 130 85 150 100 120 70 100 110 100" fill="blue" />';
    const star = new Star();
    star.setColor("blue");
    const actualSvg = star.render();
    expect(actualSvg).toEqual(correctSvg);
  });
});

