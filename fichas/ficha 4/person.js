function Person (firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName
}
Person.prototype.greet=function(){
    console.log("hello "+this.firstName+" "+this.lastName +", age: " +this.age);
}

Person.prototype.age= null;
var john=new Person("jonas","miras");
john.age=24    
john.greet();
    
    var jane=new Person("joanos","mirada");
    jane.age=15
    jane.greet();




