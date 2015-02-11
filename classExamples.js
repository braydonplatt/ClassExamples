


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







Prototypes






/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  var tyler = new User ('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
  var cahlan = new User ('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
  var lenny = new User ('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

     users.push(tyler, cahlan, lenny);
console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(tyler);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log(lenny);


//Now create another instance of User using your own information and then add that to your users array.

  var braydon = new User ('Braydon', 'braydonplatt@gmail.com', 'objectsrule');
   users.push(braydon);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
for (var i = 0; i < users.length; i++){
  console.log(users[i].name);
};
  //code here





ARRAYS PROBLEMS


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and returns the first item the given array.

var first = function(arr){
  return arr[0];
}


var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and 
//loops through the given array backwards alerting every item in the array starting 
//at the end.

var reversedLooper = function(arr){
  for(var i = arr.length - 1; i < 0; i--){
  }
  console.log(arr[i, 1]);
}
reversedLooper(letters);


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums
// as it's only argument and removes all values that aren't even from the given array.





var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array 
//(all the even values from nums) and the second item in the Array being the odds array
//(all the odd values from nums).

var divider = function (arr, evens, odds){
  for (var i = 0, i < arr.length; i++){
    if (arr[i] % 2 === 0){
      evens.push arr[i];

      }else {
      odds.push arr[i];
    }
  }
}




var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array
// full or numbers. Your job is to write a function
// named finder that will get a random number, then loop through the array to see if that
// random number is in the array. If it is, return true,
// if it's not, return false

var finder = function(arr){
  var randomNum = getRandomArbitrary;
    for(var i = 0; i < arr.length; i++){
      console.log(randomNum);
      if (arr[i] === randomNum){
        return true;
      } else {
        return false;
      }
    }
}  



var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  var removeItem = function(list, item) {
     for(var i = 0; i < list.length; i++) {
       if (item === list[i]) {
         list.splice(i, 1);
           return list;
       }
     }
  }  


//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

inner();


CallBACks


var first = function(arr, callback){
  callback(names[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



var last = function(arr, callback){
  callback(arr[arr.length - 1])
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





var multiply = function(num1, num2, callback) {
  var nums = num1 * num2;
  callback(nums);
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})


var uniq = function(arr, callback){
  var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if newArr.indexOf(arr[i]) < 0){
        newArr.push(arr[i]);
        callback(newArr);
      }  
} 
    }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




var names = function(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i)
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});








var getUserById = function(arr, str, callback){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].id === str);
    callback(arr[i]);


 //code here for getUserById

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












  //Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(myName){
  if(myName === "Tyler"){
    return true;
  }else{
    return false;
  }
};

isTyler(name);
//Next problem







//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function(){
  var name = prompt("what is your name?");
  return(name);
  getName();

}




//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


var welcome = function(){
  var name = getName();
  alert("Welcome, " + getName);
};
welcome();





//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.


var adder = function(num1, num2, num3, num4){
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    total = total + arguments(i);
  }
  return total;
};

var results = adder(1,3,6,8);
alert("The Total Number was " + results);






var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

var reversedLooper = function(myArray){
  myArray.reverse(i);
    for(var i = 0; i < myArray.length; i++){
      alert(myArray[i])
    }
  };

  reversedLooper(letters);







  var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full of numbers. Your job is to write a function
// named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true,
// if it's not, return false


var finder = function(num){
  for(var i = 0; i < num.length; i++){
    var randomNum = getRandomArbitrary;
    if(num[i] === randomNum);{
    return true; 
    }else{
      return false;
    }
  }
}







//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
 var maker = function(arr){
  var newArr = [];
    for(var i = 1; i < 216; i++){
      newArr.push(i);
    }
     return(newArr);
 }


  



var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even 
//values from nums) and the second item in the Array being the odds array(all the odd values from nums).


var divider = function(arr, evens, odds){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evens.push arr[i];
    } else {
      odds.push arr[i];
    }
  }
}






var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that 
//is given nums as it's only argument and removes all values that aren't even from the given array.


var evenFinder = function(arr){
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      arr[i].splice(i, 1);
      i--;
    }
  }
}






var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.


var last = function(arr){
  return(arr[arr.length -1]);
}

alert(last(arr));





var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.




var isTyler = function(str){
  if(str === 'Tyler'){
    return true;
  }else{
    return false;
  }
};

isTyler(str);




var getName = function(){
  var name = prompt("what is your name?");
  return(name);
  getName();

}

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.




var welcome = function(){
var newName = getName();
  alert("Welcome, " + newName);
}
welcome();






//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, 
//then alert "The Total Number was " + the number that was
//returned from adder.



var adder = function(num1, num2, num3, num4){
  var total = 0;
  for(var i = 0; i < arguments.length; i++){
    total = total + arguments(i);
  }
  return total;
}

var result = adder(1,4,3,5);
alert("The total number was " + result);





//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(myName){
  if (myName === "Tyler") {
    return true;
  } else {
    return false;
  }
};
isTyler(name);




//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function(){
  var user = prompt('What is your name?');
  return user;
}



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


var welcome = function(){
  var name = getName;
  alert("Welcome, " + name);
};
welcome();



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.


var adder = function(num1, num2, num3){
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    total = total + 1;
    return total;
  };
};
var result = adder(1,4,6);
alert("The total number was " + result);




//Create a function called outerFn which returns an anonymous function which returns your name.



var outerFn = function(){
  return function(){
    return "Braydon";
  }
};



//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and returns the first item the given array.


var first = function(arr){
  return arr[0];
};


var last = function(arr){
  return arr[arr.length -1];
}



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument
// and loops through the given array backwards alerting every item in the array starting at the end.


var reversedLooper = function(arr){
  myArray.reverse(i);
  for(var i = 0; i < arr.length; i++){
    alert(myArray[i]);
  };
};
reversedLooper(arr);


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values 
//that aren't even from the given array.

var evenFinder = function(arr){
  newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr(i) % 2 === 0){
      arr.splice(i, 1);
      i--;
    };
  };
};


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array 
//(all the even values from nums) and the second item in the Array being 
//the odds array(all the odd values from nums).

var divider = function(arr, evens, odds){
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
    evens.push arr[i];
    } else {
    odds.psuh arr[i];
    }
  }
}




var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function
// named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true,
// if it's not, return false


var finder = function (arr){
  var randomNum = getRandomArbitrary();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === randomNum) {
      return true;
    } else {
      return false;
    }
  }
}



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

var reverseString = function(string){
  return string.split('').reverse().join('');
}



//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Braydon",
  age: 32,
};
alert(me.name);



var states = {
  Utah: 2000000,
  California: 43000000,
  Georgia: 16000000,
  Arizona: 9000000,
  NewYork: 20000000,
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var key in states){
  if(states[key] > 1000000){
    alert(key);
  }




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: "Metallica",
  food: "Street Tacos",
  person: "Mikki",
  book: "Linchpin",
  movie: "Bourne Trilogy",
  holiday: "Christmas"
};

//After you've made your object, add another 
//key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

 favoriteThings.car = "Porsche";
 favoriteThings.brand = "Apple";


 alert(favoriteThings.car);



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. 
//If it's not truthy, remove it from the object. hint: 'delete'.


for(var key in user){
  if (!user[key])
    delete user[key];
};
 console.log(user);

//Once you get your truthy object, Change the remaining values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than my information.


user.name = "Braydon",
user.username = "brplatt",
user.age = 32


//Now console.log your object and make sure it looks right.
console.log(user);




var first = function(str, callback){
  callback(names[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



//have the contains function return a boolean value for if the name is in the array or not.

var contains = function(str, arr, callback){
   var flag = false;
   for(var i = 0; i < arr.length; i++){
    if(str) !== arr[i]){
  flag = true;
}

   }
  callback(flag);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.


var newNum = callFriend();
newNum('435-215-9248');



var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and returns the first item the given array.
var name = function(arr){
  return(name[0]);
};


var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops 
//through the given array backwards alerting every item in the array starting at the end.

var reversedLooper = function(arr) {
  letters.reverse(i);
  for(var i = 0; i < arr.length; i++){
    alert(arr[i]);
   };
};
reversedLooper(letters);


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given 
//nums as it's only argument and removes all values that aren't even from the given array.


var evenFinder = function(nums){
   for(var i = 0; i < nums.length; i++){
      if(nums(i) % 2 !== 0);
        nums.splice(i, 1);
        i--;
   };
};

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums)
// and the second item in the Array being the odds array(all the odd values from nums).

var divider = function(arr, evens, odds){
   for(var i = 0; i < arr.length; i++){
      if(nums(i) % 2 === 0);
      evens.push (arr[i]);
   } else {
      odds.push (arr[i]);
   };

 };
};



var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array 
//full or numbers. Your job is to write a function
// named finder that will get a random number, then loop through the array to see if that
// random number is in the array. If it is, return true,
// if it's not, return false


var finder = function(randomNum){
  for(var i = 0; i < randomNum.length; i++){
    var newNum = getRandomArbitrary();
      console.log(newNum);
       if(newNum === randomNum[i]){
          return true;
       } else {
          return false;
       };
  };
};



var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var first = function(threeItems){
  return threeItems[0];
}
alert(threeItems);


var threeItems = [2,4,6];

var last = function(arr){
  return threeItems[threeItems.length -1];
}
alert last(threeItems);


//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var even = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      arr.splice(i, 1);
      i--;
      console.log(arr)
    };
  };
};


//below you're given a function that will return a random number between 0 and 30 and an 
//array full of numbers 'randomArray'. Your
// job is to write a function that will get a random number, then loop through the
// array to see if that random number is in the array. If it is, alert true,
// if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomNum = function(arr){
  for(var i = 0; i < arr.length; i++){
  var answer = getRandomArbitrary();
     console.log(answer);
    if(arr[i] === answer){
      alert(true);
    } else {
      alert(false);
    }
  }
}


//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).








//class question







//Find the only item that occurs an even number of times in an array. If there is more than
//one item that occurs an even number of times, just return one of them.  If there are no
//items that occur an even number of times, return null.

var onlyEven = evenOccurence([1,6,2,4,4,5,6,8,9,6]);
console.log(onlyEven);  //4

var onlyEven = evenOccurence([1,1,3,4,1]);
console.log(onlyEven); //null




var evenOccurence = function(arr){  
  for(var i = 0; i < arr.length; i++){
    var nums = arr[i];
    var count = 0;
    for(var j = 0; j < arr.length; j++){
      if(nums === arr[j]);
          count++;

      } 
    };
    if(count % 2 !== 0){
      return num;
    };
    return null;
};

var onlyEven = evenOccurence([1,6,2,4,4,5,6,8,9,6]);
console.log(onlyEven);















var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(arr){
  return(threeItems[threeItems.length-1])
}
alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
var evens = function(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      arr.splice(i, 1);
      i--;
    };  
  };
};
console.log(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  var number = function(arr){
  for(var i = 0; i < arr.length; i++){
    var answer = getRandomArbitrary();
    if(arr[i] === answer){
      console.log(answer);
      return(true);
    };
  };
  return(false);
};



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var firstOne = first;
second = firstOne.slice(0, 5);

second.push(6,7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
















//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

 var favoriteThings = {
    band: 'Coldplay',
    food: 'Tacos',
    person: 'Mikki',
    book: 'Linchpin',
    movie: 'Bourne',
    holiday: 'Christmas'
 }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Porsche';
favoriteThings.brand = 'Apple';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'lettuce';
favoriteThings.book = '50 shades';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

 for (var key in user){
   if(!user[key])
    delete user[key];
 }

 console.log(user);

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Braydon Platt';
user.pwHash = 'brrDawg';
user.username = 'braydon32';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

 methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

var alertHello = function(){
  alert('hello world')
};

var consoleHello = function(){
  console.log('hello world')
};

//Now call your alertHello and logHello methods. 

consoleHello();
alertHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};







//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
var evens = function(arr){
for(var i = 0; i < arr.length; i++){
  if(arr[i] % 2 !== 0){
    arr.splice(i, 1);
    i--;
  }

}
console.log(evenArray);
};








