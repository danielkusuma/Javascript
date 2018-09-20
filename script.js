/* 
var MarkWeight = prompt("What is Mark's weight?");
var MarkHeight = prompt("What is Mark's Height?");
var JohnWeight = prompt("What is John's weight?");
var JohnHeight = prompt("What is Mark's Height?");  
var MarkBMI = MarkWeight / (MarkHeight * 2);
var JohnBMI = JohnWeight / (JohnHeight * 2); 
console.log("What is Mark's BMI = " + MarkBMI);
console.log("What is John's BMI = " + JohnBMI);
if (MarkBMI > JohnBMI) {
    var higherBMI = true;
} else {
    var higherBMI = false;
}
console.log("Is Mark's BMI higher than John's? " + higherBMI); 
*/
/*
var firstName = "Daniel";
var civilStatus = "single";
if ( civilStatus === 'married' )
{
    console.log(firstName + ' is Married');
}
else 
{
    console.log(firstName + ' is hopefully Married soon');
}

var isMarried = false;
if ( isMarried === true) {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + ' will hopely married');
}
*/
/*
var firstName = 'John';
var age = 30;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Libson');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}
*/
/*
age = 10;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age > 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}    
*/
/*
var height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}
if (height == '23') {
    console.log('The operator does type coercion');
}
*/
/*
var jteam1 = 89;
var jteam2 = 120;
var jteam3 = 103;
var mteam1 = 116;
var mteam2 = 94;
var mteam3 = 123;
var avgjteam = (jteam= + jteam2 + jteam3) / 3;
var avgmteam = (mteam1 + mteam2 + mteam3) / 3;
console.log(avgjteam, avgmteam);
if (avgjteam > avgmteam) {
    console.log("John team won");
} else {
    console.log("Mike team won");
}
avgjteam = prompt("What is Average point of John Team?");
avgmteam = prompt("What is Average point of Mike Team?");
if (avgjteam > avgmteam) {
    console.log("John team won");
} else if (avgjteam === avgmteam) {
    console.log("Result is draw");
} else {
    console.log("Mike team won");
}
var maryteam1 = 97;
var maryteam2 = 134;
var maryteam3 = 105;
var avgmaryteam = (maryteam1 + maryteam2 + maryteam3) / 3;
console.log(avgjteam, avgmteam, avgmaryteam);
if (avgjteam > (avgmteam || avgmaryteam)) {
    console.log("John team won");
} else if (avgmteam > (avgjteam || avgmaryteam)) {
    console.log("Mike team won");
} else if (avgmaryteam > (avgjteam || avgmteam)) {
    console.log("Mary team won");
} else {
    console.log("Result is draw");
}
*/
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1991);
var ageJane = calculateAge(1992);
console.log(ageJohn, ageMike, ageJane);

function yearRetire (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');    
    } else {
        console.log(firstName + ' is already retired');
    }
    
}
yearRetire(1990, 'John')
yearRetire(1991, 'Jane')
*/
/*
// function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches how to code';
        case 'driver':
            return firstName + ' drive around';
        case 'designer':
            return firstName + ' design things';
        default:
            return ' do something';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('designer', 'Mary'));
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names);
console.log(names.length);

// Mutate Array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(1990));
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/
/*var bill = [124, 48, 268];
var totalPaid = new Array();
function calculateTotalPaid (bill) {
    if (bill < 50) {
        totalPaid.push(bill + (bill * 0.2));  
    }
    if (bill >= 50 && bill <= 200) {
        totalPaid.push(bill + (bill * 0.15));  
    }
    if (bill > 200) {
        totalPaid.push(bill + (bill * 0.1));  
    }
}
calculateTotalPaid(bill[0])
calculateTotalPaid(bill[1])
calculateTotalPaid(bill[2])
console.log(totalPaid);
*/
