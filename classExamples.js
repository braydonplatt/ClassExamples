


/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/
var first = function(arr, cb){
  cb(names[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

//next problem
var last = (arr, cb){
  cb(names[names.length-1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


//next problem

var multiply = function(num1, num2, callback){
  var nums = num1 * num2;
      callback(nums);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})


//next problem

 var contains = function(arr, str, callback){
   for (var i = 0; i <arr.length; i++){
    if (str === arr[i]){
      callback(true);
    }
    }
   };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





//next problem
var getUserById = function(arr, str, callback){
  for (var i = 0; i < arr.length; i++){
    if (arr[i].id === str){
      callback(users[i]);
    }
  }
};



var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});

OBJECTS

Constructors:

var user = {
  handle: '@tylermcginnis33',
  url: 'http://twitter.com/tylermcginnis33',
  email: 'tylermcginnis33@gmail.com',
  followers: []
};

var makeUser = function(handle, url, email){
  var userObj = {
  handle = handle,
  url = url,
  email = email,
  followers = followers
};
return userObj;

var user1 = makeUser("tylermcginnis33", "tylermcginnis33@gmail.com")
user.handle
//"tylermcginnis33"




var MakeUser = function(handle, url, email){
  //var this = {};
  this.handle = handle,
  this.url = url,
  this.email = email,
  this.followers = followers
  //return this;
};
var user1 = new MakeUser("tm33", "t@gm.com")

//a constructor function creates and returns us an object. 'this'
//it is just a function.
//invoked with the new Keyword.
//'this' is an object that's created for you, delegates to the constructors prototype on failed lookups.
// 'this' 
var Person = function(name, age){
  this.name = name,
  this.age = age
}
var braydon = new Person("Braydon Platt", 32);
var justin = new Person("Justin", 22);
var allen = new Person("Allen", 23);



var friends = ["Jake", "Jason", "Ean"];
var otherFriends = new Array();




var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name){
    if name === 'Tyler'{
      return true;
    }
    else {
      return false;
}
isTyler(name);



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function(){
  var newName = prompt('What is your name?');
    return newName;
}
getName();

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function(){
  var newName = getName();
  alert('Welcome, ' + newName);
};
welcome();


//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

var adder = function(numOne, numTwo, numThree, numFour){
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    total = total + arguments(i);
  }
  return total;
}
var result = adder(1,2,4,5);
alert("The total number is " + result);


/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/




var last = function(names, callback) {
  cb (names[names.length-1]);
}  

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});







var contains = function(arr, str, callback){
   var flag = false;
  for(var i = 0; i < arr.length; i++){
    if(str === arr[i]) {
      flag = true;
    }
  }
  callback(flag);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

