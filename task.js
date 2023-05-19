// Chapter 1 (Alerts)

// question 1
// alert("Zaeem")
// alert("Badar")
// alert("zaeembadar52@gmail.com")
// alert("+"+923368244053)
// alert("ThisIsMyPassword888")

// question 2
// alert("You're learning JavaScript!")

// question 3
// alert("MY NAME IS ZAEEM")

// Chapter 2 (Variables for string)

// question 1
// var userName;

// question 2
// var myName;
// myName = "Zaeem"

// question 3
// var teamName;
// teamName = "PAKISTAN CRICKET TEAM"
// alert(teamName)

// question 4
// var bestMan = "Charlie"
// bestMan = "Chaplin"

// Chapter 3 (Variables for numbers)

// question 1
// var caseQty;

// question 2
// caseQty = 144

// question 3
// var num = 9

// question 4
// var sum ;
// sum = 2+2

// question 5
// var merchTotal = 100
// var shippingCharge = 10
// var orderTotal = merchTotal + shippingCharge
// console.log(orderTotal)

// question 6
// var num = 10
// num = num +10
// console.log(num)


// Chapter 4 (Variable names Legal and Illegal)

// question 1
// var productCost = 3.45

// question 2
// var nameOfBand;

// question 3
// var $num = 200

// question 4
// var zaeemBadar;

// question 5
// legal variables
// var name;
// var myName;
// var myNameIsZaeem;
// var _name
// var $name;
// var HELLO;
// var hello123;
// var $1;

// illegal variables
// var 123;
// var hello world;
// var !;
// var ?name;

// Chapter 5 (Math Expression I)

// question 1
// %
// var remainder = 10%3
// console.log(remainder)

// question 2
// var remainder = 20%6
// console.log(remainder)

// question 3
// var largeNum = 1000 * 2000
// console.log(largeNum) 

// question 4
// var num1 = 10
// var num2 = 5
// var result = num1-num2
// console.log(result)

// question 5
// var num1 = 10
// var num2 = 10
// var result = 10 * 10
// alert(result)


// Chapter 6 (Math Expression II)

// question 1
// var x = 2
// ++x
// console.log(x)

// question 2
// var x = 100
// --x
// console.log(x)

// question 3
// still 50
// var x = 50
// var y = x++
// console.log(y)

// question 4
// 49
// var y = 50
// var z = --y
// console.log(z)

// question 5
// var num = 50 
// --num 
// var newNum = ++num

// question 6
// var num = 50
// ++num
// var newNum = --num

// question 7
// var num = 10
// ++num
// alert(num)

// Chapter 7 (Math Expression III)

// question 1
// 14
// var calNum = 2+(2*6)
// console.log(calNum)

// question 2
// 24
// var calNum = (2+2) *6
// console.log(calNum)

// question 3
// 24
// var calNum = (2 + 2) * (4 + 2)
// console.log(calNum)

// question 4
// 18
// var calNum = ((2 + 2) * 4) + 2
// console.log(calNum)

// question 5
// var calNum = (2 + 2) * (4 + 10)
// console.log(calNum)

// question 6
// var calNum = (2 + (2 * 4)) + 10
// console.log(calNum)

// question 7


// Chapter 8 (Concatenating Text Strings)
// question 1
// 22
// var num = "2" + "2"
// console.log(num)

// question 2
// (HELLO,DOLLY)
// var msg = ("HELLO,"+ "DOLLY")
// alert(msg)

// question 3
// 333
// alert("33" + 3)

// question 4
// alert("Pakistan " + "Zindabad")

// question 5
// var concat = "hello" + 123
// console.log(concat)

// question 6
//  var stringOne = "Hello,"
//  var stringtwo = " Zaeem"
//  var result = stringOne + stringtwo
//  alert(result)

// Chapter 9 (Prompts)

// question 1
// var firstName = prompt("ENTER FIRST NAME")
// console.log(firstName)

// question 2
// var country = prompt("ENTER YOUR COUNTRY", "CHINA")
// console.log(country)

// question 3
// var yourName = prompt("ENTER YOUR NAME")

// question 4
// var greet = "GREETINGS"
// var msg = prompt(greet, "HELLO")

// question 5
// var msg = "GREETINGS"
// var default1 = "hello"
// var response = prompt(msg,default1)

// question 6
// var userName =prompt("ENTER YOUR NAME ", "eg :JACK")
// alert(userName)


// Chapter 10 (if statments)

// question 1
// var city = "Karachi"
// if (city == "Karachi") {
// console.log("The City OF Lights")}

// question 2
// var x = 1
// var y = 1
// if(x===y){
//     var z = prompt("ENTER THE VALUE OF Z")
// }

// question 3
// var zip = prompt("ENTER YOUR ZIPE CODE")
// if (zip == 10010){
//     alert("Karachi")
// }
// else{
//     alert("please write correct city")
// }

// question 4
// var x= 4
// if(x==4){
//     x=1
//     alert(x)
// }

// Chapter 11 (Comparison Operators)

// question 1
// if (x !=y){
//     alert(true)
// }

// question 2
// if(x>=y){
//     alert(true)
// }
// question 3
// var x;
// if(x!=1){
//     x=1
// }
// question 4
// if(1!=2){
//     alert("congratulations")
// }

// question 5
// var userName = prompt("enter your name")
// if(userName !="zaeem"){
//     alert("NO MATCH")
// }

// Chapter 12 (if...else and else if statements)

// question 1
//  var a = 10
//  var b = 11
//  if (a >b ){
//     alert(true)
//  }
//  else{
//     alert(false)
//  }

// question 2
// var marks1 = +prompt("ENTER YOUR MARKS IN MATHS")
// var marks2 = +prompt("ENTER YOUR MARKS IN PHYSICS")
// var marks3 = +prompt("ENTER YOUR MARKS IN CHEMISTRY")
// var totalMarks = 300
// var obtMarks = marks1+marks2+marks3
// var perc = obtMarks / totalMarks *100 
// perc.toFixed(2)
// if (perc >=80 && perc<=100 ){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS A+")
// }
// else if (perc>=70 && perc<80){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS A")
// }
// else if (perc>=60 && perc<70){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS B")
// }
// else if (perc>=50 && perc<60){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS C")
// }
// else if(perc>=40&& perc<50){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS D")
// }
// else if(perc <40 &&perc>=0){
//     alert("YOUR PERCENTAGE IS "+perc + " AND YOUR GRADE IS F (FAIL)")
// }
// else{
//     alert("PLEASE ENTER VALID MARKS ")
// }

// question 3
// var a=12
// if (a ===10){
//     alert("a is 10")
// }
// else{
//     alert("the correct value of a is "+ a)
// }

// question 4
// var city = prompt("ENTER YOUR CITY").toUpperCase()
// if(city== "KARACHI"){
//     alert("it's karachi")
// }
// else if (city=="LAHORE"){
//     alert("it's lahore")
// }
// else{
//     alert("it's not in my list")
// }

// Chapter 13 (Testing sets of conditions)


// question 1
// if (a==b && c==d){
//     alert(true)
// }

// question 2
// if(a ==b || c!=d){
//     alert(true)
// }


// question 3
// if(name == "HAMZA"|| name =="ARSALAN" && age <60){
//     alert(true)
// }


// question 4
// var a = 10
// var b = 11
// if (a >b){
//     alert("a>b")
// }
// else{
//     alert("b>a")
// }


// question 5

// var fName= "ZAEEM"
// var lName = "BADAR"
//  var fNameAsk = prompt("WHAT IS MY FIRST NAME?").toUpperCase()
//  var lNameAsk = prompt("WHAT IS MY LAST NAME?").toUpperCase()
//   if ( fName == fNameAsk && lName == lNameAsk){
//     alert("CORRECT")
//   }
//   else{
//     alert("WRONG")
//   }

// Chapter 14 (If statements nested)

// question 1

// if(password !== ""){
//     if(password>5){
//         alert("ok")
//     }
//     if(password <5){
//         alert("password must be greater than 5")
//     }
// }

// question 2
// if (a===1){
//     if (c==="Max"){
//         alert("ok")
//     }
// }

// question 3
// if (a===1 && c==="Max"){
//     alert("ok")
// }

// question 4
//  var a =10
//  var b =10

//  if(a==b){
//     if (a>b || b>a){
//         alert("ok")
//     }
//     alert("a=b")
//  }

// Chapter 15 (Array I)

// question 1
// var arr =[]

// question 2
// var arr = ["Karachi"]

// question 3
// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// question 4
// var alphabet=["h","i","j","k", "l","m", "n", "o"]
// console.log(alphabet.length)

// question 5

// var arr = ["FIRST ELEMENT"]
// arr[1]= "SECOND ELEMENT"
// alert(arr[1])
// console.log(arr)


// Chapter 16 (Array II)

// question 1
// var arr = ["FIRST ELEMENT"]
// arr.push("SECOND ELEMENT")
// alert(arr[1])
// console.log(arr)

// question 2
// var alphabet=["h","i","j","k"]
// alphabet.pop()
// console.log(alphabet)

// question 3
// var alphabet=["h","i","j","k"]
// alphabet.push("l",2)
// console.log(alphabet)

// Chapter 16 (Array III)

// question 1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.shift()
// console.log(sizes)

// question 2
// var sizes=["S","M", "XL", "XXL", "XXXL"]
// sizes.unshift(1,2,3)
// console.log(sizes)

// question 3
// var arr = ["FIRST ELEMENT"]
// arr.unshift("NEW FIRST ELEMENT")
// alert(arr[0])

// question 4 
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.splice(2,0,"L")
// console.log(sizes)

// question 5

// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// var regSizes = sizes.slice(0,3)
// console.log(regSizes)

// question 6
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,3 ,"PARROT", "HORSE")
// console.log(pets);

// question 7 
// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,2)
// console.log(pets);

// question 8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
// var reduced =pets.slice(3,5)
// console.log(reduced);

// Chapter 17 - 20 (for Loops)

// question 1
// for(i=0; i<=10;i++){

// }

// question 2
// for(i=0; i<=12;i++){

// }

// question 3
// for(var i =0;i<=4;i++){

// }

// question 4
// for(var j = 0 ; j<=100; j++){

// }

// question 5
// for(var i =0 ; i >=3; i--){

// }

// question 6
// var arr = ["FIRST ELEMENT", "SECOND ELEMENT"]

// question 7
// var flag = true


// question 8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
// for(var i =0 ; i =pets.length ; i ++){

// }

// question 9
// for(var i = 0 ; i<=10; i ++){
//     if (i<0 && i<=1){
//         alert(i)
//     }
//     break
// }

// question 10
// var userNames = ["zaeem","ali", "hashim", "umair"]
// var firstName = prompt("ENTER YOUR USERNAME")
// var check =userNames.indexOf()
// for(var i =0 ; i > userNames.length ; i ++){
//     if(firstName ==check[-1]){
//         alert("ENter")
//     }
    
//     // else{
//     //     alert("PLEASE ENTER CORRECT USERNAME")
//     // }
//     break
// }


