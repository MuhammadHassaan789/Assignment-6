//Q1//
for (var i = 0; i < 5; i++) {
    console.log("Hello World");
}

//Q2//
for (var i = 1; i < 11; i++) {
      console.log(i)
}

//Q3//
var userInput = prompt('Enter a number for the multiplication table:')
var length = prompt('Enter the length of the multiplication table:')

for (var i = 1; i <= length; i++) {
      console.log(userInput + ' x ' + i + ' = ' + userInput * i)
}

//Q4//
var phones = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

for (var i = 0; i < phones.length; i++) {
      console.log(phones[i])
}

//Q5//
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

for (var i = 0; i < fruits.length; i++) {
      console.log('Element at index ' + i + ' is ' + fruits[i])
}

//Q6//
var items = []
var itemNumber = prompt('Enter number of item')

for (var i = 0; i < itemNumber; i++) {
        var item = prompt("Enter item " + (i + 1) + ":");
        items.push(item);
        console.log(items[i]) 
    }

//Q7//
a.
for (var i = 1; i <= 10; i++) {
      console.log(i)
}

b.
for (var i = 10; i >= 1; i--) {
      console.log(i)
}

c.
for (var i = 2; i <= 20; i = i + 2) {
      console.log(i)
}

d.
for (var i = 1; i <= 20; i = i + 2) {
      console.log(i)
}

e.
for (var i = 2; i <= 20; i = i + 2) {
      console.log(i + 'k')
}

//Q8//
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search = prompt("Welcome to Apni Bakery. What do you want to order Sir/Ma'am?")
var bakeryFound = false

for (var i = 0; i < bakery.length; i++) {
      if(bakery[i] === search) {
      alert(search + ' is available at index ' + i + ' in our bakery.')
      bakeryFound = true
     }
}
if(bakeryFound === false) {
   alert('We are sorry.') 
}

//Q9//
var nums = [24,53,78,91,12]
var largestNum = nums[0]
for (var i = 0; i < nums.length; i++) {
      if(nums[i] > largestNum) {
        largestNum = nums[i]
      }
      
}
alert('The largest number is ' + largestNum)

//Q10//
var nums = [24, 53, 78, 91, 12]
var smallestNum = nums[0]

for(var i = 0; i < nums.length; i++) {
    if(nums[i] < smallestNum){
        smallestNum = nums[i]
    }
}  
alert('The smallest number is ' + smallestNum)

//Q11//
var nums = [24, 53, 78, 91, 12]
var smallestNum = nums[0]
var largestNum = nums[0]

for(var i = 0; i < nums.length; i++) {
    if(nums[i] < smallestNum){
        smallestNum = nums[i]
    } else if (nums[i] > largestNum) {
        largestNum = nums[i]
    }
}  
alert('The smallest number is ' + smallestNum)
alert('The largest number is ' + largestNum)

//Q12//
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }  

//Q13//
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

for(var i = 0; i < students.length; i++) {
    console.log(students[i])
} 
for(var i = 0; i < scores.length; i++) {
    console.log(scores[i])
} 

//Q14//
var scores = [12, 45, 3, 22, 34, 50];
var stopValue = prompt("Enter the stop value:")

for (var i = 0; i < scores.length; i++) {
    if (scores[i] <= stopValue) {
        console.log(scores[i]);
    } else {
        break;
    }
}


//Q16//


