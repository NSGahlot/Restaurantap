class Employee {
  //Write the code here
  constructor(name, year, address){
    this.name = name;
    this.year = year;
    this.address = address;
  }
  print_details(){
    console.log(this.name + " " + this.year + " " + this.address);
  }
}
//Do Not change the Below  Code

var t = new Employee("ram", 1992, "Bangalore");
t.print_details();

var x = new Employee("shyam", 2010, "Lucknow");
x.print_details();

var y = new Employee("babu_rao", 2015, "Delhi");
y.print_details();
