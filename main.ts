import inquirer from "inquirer"
// define the student class
class student{
    static counter = 10000;
 id : number;
name:string;
coures:string[];
balance :number;

constructor(name:string){
    this.id=student.counter++;
    this.name=name;
    this.coures=[] //inilialize an empty array for courses
    this.balance=100
}


// method to enroll a student in a courses
enoll_courses(courses: string){
this.coures.push(courses);
}
//method to viwe a student balance
view_balance(){
   console.log ('balance for${this.name}:$${this.balance}');
}


//method to pay  student fees
pay_fees(amount:number){
this.balance -= amount;
console.log('$${amount}fees paid successfully for${this.name}');
}

//mothod to display student status
show_status(){
    console.log('id:${this.id}');
    console.log('Name:${this.name}');
    console.log('courses:${this.courses}');
    console.log('balance:${this.balance}');
}
}

