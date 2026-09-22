const test_user = {
  name: "Аня",
  age: 20,
};

console.log(typeof (test_user) );

interface Point {
  x: number;
  y: number;
}
 
class Vector {
  x = 0;
  y = 0;
  length() { return Math.hypot(this.x, this.y); }
}
 
function printPoint(p: Point) {
  console.log(p.x, p.y);
}
 
printPoint(new Vector());    // ок
printPoint({ x: 1, y: 2 });  // ок
