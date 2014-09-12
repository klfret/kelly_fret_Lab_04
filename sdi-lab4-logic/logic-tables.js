//  NAME:  Kelly L. Fret
//  DATE:  11 September 2014
//  Scalable Data Infrastructures
//  Day 4 Lab
//  Assignment 1
//  Using logical operators


// ******* Table - 1 P && Q *******
// var p;
// var q;
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// 
	// if (p && q) {
// 		
		// console.log("With " + p + " and " + q + ", the outcome is TRUE.");
// 			
	// } else {
// 		
		// console.log("With " + p + " and " + q + ", the outcome is FALSE.");
	// }



// ******* Table 2 - P || Q *******
// var p;
// var q;
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// 
	// if (p || q) {
// 		
		// console.log("With " + p + " and " + q + ", the outcome is TRUE.");
// 			
	// } else {
// 		
		// console.log("With " + p + " and " + q + ", the outcome is FALSE.");
	// }



// ******* Table 3 - (P && (Q || R) *******
// var p;
// var q;
// var r;
// var table = 0;
// 
// 
// while ( table >= 0 ) {
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// r = confirm("Third value:  Click OK for true or Cancel for false.");
// 
// 
	// if (p && (q || r)) {
// 		
		// console.log("With " + p + " and ( " + q + " or " + r + " )" + ", the outcome is TRUE.");
// 				
// 		
	// } else {
// 		
		// console.log("With " + p + " and ( " + q + " or " + r + " )" + ", the outcome is FALSE.");
// 		
	// }
// 
	// table++;
// 	
	// if (table === 8) {
		// break;
	// }
// };



// ******* Table 4 - (P && !Q) || R *******
// var p;
// var q;
// var r;
// var table = 0;
// 
// 
// while ( table >= 0 ) {
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// r = confirm("Third value:  Click OK for true or Cancel for false.");
// 
	// if ((p && !q) || r) {
// 		
		// console.log("With ( " + p + " and NOT " + q + " ) or " + r + ", the outcome is TRUE.");
// 		
	// } else {
// 		
		// console.log("With ( " + p + " and NOT " + q + " ) or " + r + ", the outcome is FALSE.");
// 		
	// }
// 
	// table++;
// 	
	// if (table === 8) {
		// break;
	// }
// };



// ******* Table 5 - P || (Q || R) *******
// var p;
// var q;
// var r;
// var table = 0;
// 
// 
// while ( table >= 0 ) {
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// r = confirm("Third value:  Click OK for true or Cancel for false.");
// 
	// if (p || (q || r)) {
// 		
		// console.log("With " + p + " or ( " + q + " or " + r + " ), the outcome is TRUE.");
// 		
	// } else {
// 		
		// console.log("With " + p + " or ( " + q + " or " + r + " ), the outcome is FALSE.");
// 		
	// }
// 
	// table++;
// 	
	// if (table === 8) {
		// break;
	// }
// };




// ******* Word Problem 1 - Movie Ticket Prices and Discount *******
// my variable declarations
// var customerAge;
// var ticketPrice = 12.00;
// var ticketDiscount = 7.00;
// 
// // prompting customer to enter their age
// customerAge = prompt("Enter your Age and Click OK.");
// 
// // if age is 55 and above or 9 and below
// if (customerAge >= 55 || customerAge <= 9) {
// 	
	// // subtract ticket discount from ticket price
	// ticketPrice = ticketPrice - ticketDiscount;
// 	
	// // output ticket price after discount
	// console.log("Your ticket price is $" + ticketPrice + ".");
// }
// 
// // if age is NOT 55 and above or 9 and below
// else {
	// // reassign original ticket price
	// ticketPrice = 12.00;
// 	
	// // output original ticket price
	// console.log("Your ticket price is $" + ticketPrice + ".");
// }



// ******* Word Problem 2 - Tire Pressure Maintenance Standards *******
// my variables declarations
var frontLeftTirePressure;
var frontRightTirePressure;
var rearLeftTirePressure;
var rearRightTirePressure;

// prompting user to enter the vehicle's tire pressure
frontLeftTirePressure = parseFloat(prompt("Enter the tire pressure for the left front tire and Click OK."));
frontRightTirePressure = parseFloat(prompt("Enter the tire pressure for the right front tire and Click OK."));
rearLeftTirePressure = parseFloat(prompt("Enter the tire pressure for the left rear tire and Click OK."));
rearRightTirePressure = parseFloat(prompt("Enter the tire pressure for the right rear tire and Click OK."));

// if tire pressures are equal
if ((frontLeftTirePressure === frontRightTirePressure) && (rearLeftTirePressure === rearRightTirePressure)) {
	
	// output tires meet standards
	console.log("The tire pressures meet the maintenance standards.");
}

// if tire pressures are NOT equal
else {
	// output tires DO NOT meet standards
	console.log("The tire pressures DO NOT meet the maintenance standards.");
}



