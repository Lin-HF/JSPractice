/*
                varibales and data types
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullage = true;
// console.log(fullage);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var _3year = 3;
// var johnMark = 'John and Mark';

/*
                Variable mutation and type coercion
*/

//Type coercion
// var firstName = 'John';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Vairable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + '' + lastName);


/*********************
 * Basic Operators
 */

//  var year, yearJohn, yearMark;
//  now = 2019;
//  ageJohn = 27;
//  ageMark = 33;
//  yearJohn = now - ageJohn;
//  yearMark = now - ageMark;

//  console.log(yearJohn);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  //Logical operator
//  var johnOlder = ageJohn < ageMark;
//  console.log(johnOlder);

//  //type operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);


//operator precedence
// var now = 2019;
// var yearJohn = 1992;
// var fullage = 27;

// //multiple operators
// var isFullage = now - yearJohn >= fullage;
// console.log(isFullage);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //Multiple assginment
// var x,y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// //more operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

var massDavid = 110; //kg
var heightDavid = 1.87; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIDavid = massDavid / (heightDavid * heightDavid);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIDavid, BMIJohn);

var age = 21;
switch(true) {
    case age < 10:
        console.log("Age is smaller than 10");
        break;
    case age < 20:
        console.log("He is a teenager");
        break;
    case age < 50:
        console.log("He is a man");
        break;
    default:
        console.log("He is an old man");
}
