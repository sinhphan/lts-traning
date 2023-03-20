function Person(pName,pAge){
  var name = pName
  var age = pAge

  this.setName = (newName)=>{
    name = newName
  }

  this.getName = ()=> name

  this.setAge=(newAge)=>{
    age = newAge
  }

  this.getAge = ()=>age
}

const sinh = new Person('sinh',29)
console.log(sinh.getAge())
sinh.setAge(30)
console.log(sinh.getAge())

// function Person(firstName, lastName) {
//   var fstName = firstName;
//   var lstName = lastName;
  
//   this.setFirstName = function(firstName) { 
//       fstName = firstName; 
//   };

//   this.getFirstName = function() {
//       return fstName; 
//   };
  
//   this.setLastName = function(lastName) { 
//       lstName = lastName; 
//   };

//   this.getLastName = function() { 
//       return lstName; 
//   };
// }

// var person1 = new Person('Khoa', 'Nguyen');
// console.log(person1.fstName); // Undefined, không thể truy cập được


// console.log(person1.getFirstName()); // Khoa