// class count_objects {
//   //Write the code here
//   static i = 0;
//   constructor(){
//     count_objects.i++;
//   }
// }
// //Do Not change the Below  Code

// var a = new count_objects();
// var b = new count_objects();
// var c = new count_objects();
// console.log(count_objects.i);
// var d = new count_objects();
// console.log(count_objects.i);
// var e = new count_objects();
// console.log(count_objects.i);
class Shape{
  printShape(){
    console.log("This is shape");
  }
}
class Rectangle extends Shape{
print(){
  console.log("This is rectangle");
}
}

class Circle extends Shape{
print(){
  console.log("This is circle");
}
}

class Square extends Rectangle{
  printSquare(){
    console.log("Square is a rectangle");
  }
}



var x = new Square();
x.printSquare();
x.printShape();
x.print();
var y = new Circle();
y.print();
y.printShape();

