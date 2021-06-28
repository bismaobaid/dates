//                          CHP 26 TO 30

// QUESTION NO: 1 

// Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// ANSWER:

// var input=+prompt("enter the no");
// var b=Math.round(input);
// document.write(" the number is"+input+"<br>");
// document.write("after round the no is "+b+"<br>");
// var c=Math.floor(input);
// document.write("after floor te value is "+c+"<br>");
// var d=Math.ceil(input);
// document.write("after ceil te value is "+d+"<br>");

// QUESTION NO: 2

// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// ANSWER:

// var input=+prompt("enter the no");
// var b=Math.round(input);
// document.write(" the number is"+input+"<br>");
// document.write("after round the no is "+b+"<br>");
// var c=Math.floor(input);
// document.write("after floor te value is "+c+"<br>");
// var d=Math.ceil(input);
// document.write("after ceil te value is "+d+"<br>");

// QUESTION NO: 3  Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// ANSWER:

// var input=prompt("enter the no");
// var b=Math.abs(input);
// document.write("the absolute value of the number is "+b);

// QUESTION NO: 4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// ANSWER:

// var b= Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// document.write("random dice value is "+b);

// QUESTION NO: 5   Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// ANSWER:

// var a=Math.floor(Math.random()*2);
// if( a==0){
//     document.write(a+"<br>"+"random coin value Heads");
// }
// else{
//     document.write(a+"<br>"+"random coin value Tails");
// }

//QUESTION NO: 6 Write a program that shows a random number between 1 and 100 in your browser.

// ANSWER:

// var a=Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// document.write("the random number is "+a);

//QUESTION NO: 7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:

// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// ANSWER:

// var weight=prompt("enter your weight");
// var b=weight.toString();
// document.write("the weight of the user is : "+b);


// var weight=prompt("enter your weight");


//QUESTION NO: 8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// ANSWER:

// var number= Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// var input=prompt("enter the number from 1 to 10");

// document.write(" the random no is " + number + "<br>" );
// document.write(" the user input is " + input + "<br>" );

// if (number == input){
//     document.write("congratulate! u wins ");
// }
// else{
//     document.write("you loss!");
// }

//                  CHAPTER 31 TO 34

// QUESTION NO:1 Write a program that displays current date and time in your browser.

// ANSWER:

// var a=new Date();
// document.write(a);

// QUESTION NO: 2    Write a program that alerts the current month in words. For example December.

// ANSWER:

// var months=["jan","feb","mar","april","may","june"]
// var a =new Date();
// var b=a.getMonth();
// document.write("current month : "+months[b]);

// QUESTION NO: 3  Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// ANSWER:

// var days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
// var a =new Date();
// var b=a.getDay();
// alert(days[b]);

// QUESTION NO: 4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// ANSWER:

// var days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
// var a =new Date();
// var b=a.getDay();
// if (days[b]=="Sat"||days[b]=="Sun"){
//     document.write("It's Fun day");
// }
// else{
//     document.write("It's not a Fun day");
// }

// QUESTION NO: 5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// ANSWER: 

// var a =new Date();
// var b=a.getDate();
// if (b<16){
//     alert("First Fiftten days of the months");

// }
// else{
//     alert("last days of the month");
// }

// QUESTION NO: 6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 

// ANSWER: 

// var a =new Date();
// document.write("Current Date : "+ a +"<br>");
// var b=a.getTime();
// document.write("Elapsed miliseconds since 1 Jan 1970 :"+b+"<br>");
// var d=b/1000*60*60;
// document.write("Elapsed minutes since 1 Jan 1970 :"+d+"<br>");

// QUESTION NO: 7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// ANSWER:

// var a =new Date();
// var b=a.getHours();
// if (b<"12"){
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

// QUESTION NO: 8  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// ANSWER:

// var laterDate =new Date("Thu Dec 31 2020 00:00:00");
// document.write("Later Date : "+ laterDate);

// QUESTION NO: 9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var a =new Date("April 14 2021");
// document.write("The ramzan starts at ", a +"<br>");
// var b= new Date();
// document.write("the current date is "+ b +"<br>");
// var c=a.getTime();
// var d=b.getTime();
// var f=d-c;
// var days=Math.round((f/1000*60*60*24));
// document.write(days+"days have passed since 1 ramzan 2021 ");

// QUESTION NO: 10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// ANSWER:

// var a =new Date("Dec 5 2015 22:50:16");
// var b=a.getTime();
// var seconds=b/1000*60;
// document.write(seconds +" have passed since begining of the 2015");

// QUESTION NO: 11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// ANSWER:

// var a= new Date();
// var b=a.getHours();
// document.write("current date : "+ a +"<br>");
// document.write(b+"hours ago it was "+a);

// QUESTION NO: 12 Write a program that creates a date object and show thedate in an alert box that is reset to 100 years back?

// ANSWER:


// QUESTION NO: 13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// ANSWER:

// var a =new Date();
// var b=a.getTime();
// var c=new Date("15 Jan 2002");
// var d=c.getTime();
// var e=b-d;
// var age=Math.floor(e/1000*60*60*24*12*30);
// document.write("Your age is: "+age+"<br>");
// document.write("Your birth year is "+c.getFullYear());

// QUESTION NO: 14  

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)   Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// ANSWER: 

// document.write("<b> k-Electric Bill  <b> <br><br>");
// var customername=prompt("enter your name");
// var Current_Month="June";
// var number_of_units=300.6512;
// var number_of_units=number_of_units.toFixed(2);
// var charges_per_units=16.7123;
// var charges_per_units=charges_per_units.toFixed(2);
// var net_amount_payable=number_of_units*charges_per_units;
// var late_paymentsurcharge=200;
// var gross_amount_payable=net_amount_payable+late_paymentsurcharge;

// document.write("Customer Name : "+customername+"<br>");
// document.write("Current Month : "+Current_Month+"<br>");
// document.write("Number Of Units : "+number_of_units+"<br>");
// document.write("Charges Per Units : "+charges_per_units+"<br>");
// document.write("Net amount payable after Due Date : "+net_amount_payable.toFixed()+"<br>");
// document.write("Late payment surcharge  : "+late_paymentsurcharge+"<br>");
// document.write("gross amount payable after Due Date : "+gross_amount_payable.toFixed()+"<br>");








































