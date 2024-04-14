class Employee {
  //Write the code here
  salary = 0;
  working_hours = 0;
  getInfo(salary, working_hours){
    this.salary = salary;
    this.working_hours = working_hours;
  };
  AddSal(){
    if(this.salary<500){
       this.salary += 10;
    }
  };
  AddWork(){
    if(this.working_hours>6){
        this.salary += 5;
    }
  };
}
//Do Not change the Below  Code

var t = new Employee();
t.getInfo(400, 7);
t.AddSal();
t.AddWork();
console.log(t.salary);
var x = new Employee();
x.getInfo(600, 8);
x.AddSal();
x.AddWork();
console.log(x.salary);
