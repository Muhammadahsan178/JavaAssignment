// Chap 21-25 Task #1

// var firstName= prompt("Enter Your First Name");
// var lastName= prompt("Enter Your Last Name");
// var fullName= firstName + " " +lastName;
// alert(" Welcome" + " " + fullName)

// Chap 21-25 Task #2

// var FavouritePhone = prompt("Enter Your Favourite phone name", " Samsung Galaxy S6 Edge plus");
// for (var i = 0; i<=FavouritePhone.length; i++) {
//     console.log(FavouritePhone[i])
// }

// Chap 21-25 Task #3

// var name= ["pakistani"];
// console.log(name.indexOf("n"))

// Chap 21-25 Task #4

// var name= "Hello world";
// console.log(name.lastIndexOf("l"))

// Chap 21-25 Task #5


    // var str = prompt("Enter Your Country Name","Pakistan")
    // var res = str.charAt(3)
    // document.write("String:" + " "  + str + "<br>")
    // document.write(" character at 3rd index:" + " " + res)

// var name=prompt("Enter the Coutry Name", " Pakistan");
// alert(name.indexOf(3))


// Chap 21-25 Task #7

// var City = prompt("Enter your city name","Hyderabad");
// var cities= ["Hyderabad", " Islamabad"]
// for(i=0; i<=cities.length; i++){
//     if (cities[i]=== "Hyderabad"){
//         document.write("City:" + City + "<br/>")
//         document.write("After Replacement: Islamabad")
//     }

// }

// Chap 21-25 Task #9

// var a = prompt("Enter Your Number");
// var value= "472";
// if( a === value){
//     alert("Type: Number")
// }
// else{
//     alert("Type: String")
// }

    // Chap 21-25 Task #10

// var name = prompt("Enter Your Name");
// document.write(name.toUpperCase());

    // Chap 21-25 Task #11

    // var title = prompt("Enter Your Input");
    // var firstChar = title.slice(0,1);
    // firstChar = firstChar.toUpperCase()
    // var otherChar = title.slice(1)
    // otherChar = otherChar.toLowerCase()
    // var title = firstChar+otherChar
    // document.write("Title case:" + title) 
    
 // Chap 21-25 Task #12

    // var Number = "35.36";
    // checkedNew = Number.replace('.', "");
    // document.write("Result:" + checkedNew)


// Chap 21-25 Task #14

// var sweets = prompt("Enter Your Favourite Sweet Dish");
// sweets = sweets.toLowerCase()
// var items =["cake", "applepie" ,"cookie" ,"chips" ,"patties"]
// for (var i=0; i < items.length; i++){
//     if(sweets === items[i]){
//         alert( sweets + " Is Avaiable at index" + " " + i + " in our bakery")
//     }

//    else{
//         alert("We are Sorry" + " " + sweets + " " + " is not available in our bakery")
//     }
// }



// Chap 21-25 Task #16

// var uni = "University Of Karachi"
// var Un  = uni.split("")
// for ( j=0; j<21; j++ )
// document.write(Un[j] + "<br>")

// Chap 21-25 Task #17

// var ShowUserInputLastChar = prompt("Enter a name");
// document.write( "User Input", " " , ShowUserInputLastChar ,"<br>");
// var lastChar = ShowUserInputLastChar.slice(-1);
// document.write( "Last character of Input:", " " , lastChar ,"<br>");

// Chap 21-25 Task #18
// var occuranceMessage = "The quick brown fox jumps over the lazy dog";
// occuranceMessage = occuranceMessage.toLocaleLowerCase();
// var occurNum = occuranceMessage.match(/the/g);
// alert ("There are " + occurNum.length + " occurance (s) of word 'The' ");


// Chap 26-30 Task #1

// var Number = 3.45214;
//     var Round = Math.round(Number);
//     var Round = Math.ceil(Number);
//     var Round = Math.floor(Number);
//     document.write(Round)
        
// Chap 26-30 Task #2

// var Number = -2.673;
//     var Round = Math.round(Number);
//     var Round = Math.ceil(Number);
//     var Round = Math.floor(Number);
//     document.write(Round)
        
// Chap 26-30 Task #4

// var dice = Math.random()*6
// var floor = Math.floor(dice)
// document.write("The Number Of Dice Is:" + floor)



// Chap 26-30 Task #5

    // var headuser = prompt("Enter Heads Username");
    // var tailsuser = prompt ("Enter Tails username");
    // var toss = Math.random()*2;
    // var floor = Math.floor(toss)
    // if ( floor === 1 ){
    //     alert("Heads" + " " + headuser  + " "+ "Win The Toss")
    // }
    // else{
    //     alert("Tails" + " " + tailsuser + " " + "win the toss")
    // }

    // Chap 26-30 Task #6
// var Number = Math.random()*100
// var floor = Math.floor(Number)
// document.write(floor)

// Chap 26-30 Task #7
// parseInt = prompt ("Enter Your Weight");
// document.write("The Weight Of User is:"+ " " + parseInt)


// Chap 26-30 Task #8

// var Number = +prompt("Enter The Number Between 1 to 10");
// var value = 3;
// if ( Number === value){
//     alert("Congratulation! You Have Guess Right")
// }
// else{
//     alert("Try Again")
// }

// Chap 31-34 Task #1

// var a = new Date();
// document.write(a)

// Chap 31-34 Task #2

// var a = getMonth();
// document.write(a)


// Chap 31-34 Task #3

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// document.write(c)

// Chap 31-34 Task #4
// var a = new Date();
// var b=a.toString();
// var c = b.slice(0,3)
// if (a == fri ){
//     document.write("Today is funday");
// }

// Chap 31-34 Task #5

// var Date = prompt("Enter The Current Date");
// if( Date === 15){
//     alert("First fifteen days of the month")
// }
// else if( Date <15 ){
//     alert("First fifteen days of the month")
// }
// else if( Date > 15){
//     alert("Last days of the month")
// }

// Chap 31-34 Task #6


// var a = new Date();
// document.write( "Current Date :" + " " + a + "<br>")
// var dob = new Date ("Oct 27, 1999");
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// var diff =  todaymilli -dobmilli;
// var accuage = diff
// document.write("Elapsed Milliseconds Since Jan 1, 1970:" + " " + accuage + "<br>")

// var accuage = Math.floor (diff/(1000*60*60))
// document.write("Elapsed Seconds Since Jan 1, 1970:" + " " + accuage )


// Chap 31-34 Task #7

// var hour = prompt("Enter the time", "1200");
// if( hour >=0000 && hour <1200 ){
//     alert("AM")
// }
// else if( hour >=1200 && hour <2400){
//     alert("PM")
// }

// Chap 31-34 Task #8

// var a = new Date("Dec 31, 2020");
// document.write(a)

// Chap 31-34 Task #9

// var newdate = new Date ("April 25, 2020")
// var oldDate = new Date ("Jun 18, 2015")
// var Remday = newdate - oldDate
// var accuday = Math.floor (Remday/(1000*60*60*24))
// document.write(accuday + " " + " Days have passed since 1st Ramadan, 2015")


// Chap 31-34 Task #10
// var endDate = new Date("Dec 05, 2015");
// document.write(endDate)
// var startDate = new Date ("Jan 01, 2015")
// var Seconds = endDate - startDate
// var accuage = Math.floor (Seconds/(1000*60))
// document.write(accuage)

// Chap 31-34 Task #13

// var dob = new Date ( prompt ("Enter Your Date Of Birth", "Oct 27, 1999") )
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// var diff =  todaymilli -dobmilli;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage);


// Chap 31-34 Task #14

// var Name = prompt("Enter Your Name");
// var month = prompt ("Enter Your Bill Month");
// var NumberOfUnit = 410;
// var chargesperUnit = 16;
// var latePaymentCharge = 350

// var netAmount = NumberOfUnit * chargesperUnit;
// var  GrossPayable = netAmount + latePaymentCharge;

// document.write("Name:" + " " + Name + "<br>")
// document.write("Month:" + " " + month + "<br>")
// document.write("Number of Unit:" + " " + NumberOfUnit + "<br>")
// document.write("Charges per Unit:" + " " + chargesperUnit + "<br>")

// document.write("Net Amount Payable:" + " " + netAmount + "<br>")
// document.write("Late Payment Charges :" + " " + latePaymentCharge + "<br>")
// document.write("Gross Payable:" + " " + GrossPayable + "<br>")