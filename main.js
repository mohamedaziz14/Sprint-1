// Variables:

// Problem: Write a JavaScript function that declares a variable using var and returns its value.

// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.

// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts to reassign it. Handle any resulting errors.

// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.

// Problem: Write a function that takes a variable as an argument and returns its data type.

// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.

// Problem: Write a function that checks if a given number is even or odd and returns an appropriate message.

// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.

// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.

// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.
///////////////exercice1
var x=20
function add(){
    return x
}
///////////exercice2
function equal(num1,num2){
    if (num1===num2){
    return true }
    else {return false }


}
///////////////////exercice3
function add(){
    var x=2
    return x=x+2
}
undefined
add()
4
/////////////////ex4
var x=2
function add(){
    return x}
    //////////////ex5
    function hello(x){
        return typeof(x)
          }
          ///////////ex6
          function age(a){
            if (a<10){
                return 'its a child'}
                    else if (a>10 && a<18){
                return 'its a teenager'}
                    else if (a>18 && a<45 ){
                return 'its an adult'}
                    else {return 'its an senior citizen'}}
                    /////////////////exercice7
                    function hello1 (x){
                        if (x%2===0){
                            return 'even'}
                        else {return 'odd'
                             }
                    }
                    ////ex 8
                    function login(username,passeword){
                        if (username==='aziz'&& passeword===1234){
                            return true}
                        else{ return false}
                    }
                    ////////////ex9
