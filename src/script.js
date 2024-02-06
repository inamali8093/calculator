// // Use insert() function to insert the number in textview.  
// function insert(num){  
// documentdocument.form1.textview.value = document.form1.textview.value + num;  
// }  
  
// // Use equal() function to return the result based on passed values.  
// function equal(){  
// let exp = document.form1.textview.value;  
// if(exp)  {  
// document.form1.textview.value = eval(exp)  
// }  
// }  
  
// /* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
// function backspace(){  
// let exp = document.form1.textview.value;  
// document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
//} 

var calculation = ""; 
function insert(num) { calculation = calculation + num; document.form1.textview.value = calculation; } 
function equal() { var result = eval(calculation); document.form1.textview.value = result; calculation = ""; } 
function backspace() { calculation = calculation.substring(0, calculation.length - 1); document.form1.textview.value = calculation; } 
function clearDisplay() { document.form1.textview.value = ""; calculation = ""; } 