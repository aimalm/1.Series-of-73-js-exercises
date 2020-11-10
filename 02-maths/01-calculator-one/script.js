/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        


    document.getElementById("addition").addEventListener("click", function() {
        var number1 =parseInt(document.getElementById("op-one").value);
        var number2 =parseInt(document.getElementById("op-two").value);
           
        window.alert(number1 + number2);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var number1 =parseInt(document.getElementById("op-one").value);
        var number2 =parseInt(document.getElementById("op-two").value);
           
        window.alert(number1 - number2);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var number1 =parseInt(document.getElementById("op-one").value);
        var number2 =parseInt(document.getElementById("op-two").value);
           
        window.alert(number1 * number2);
    });

    document.getElementById("division").addEventListener("click", function() {
        var number1 =parseInt(document.getElementById("op-one").value);
        var number2 =parseInt(document.getElementById("op-two").value);
           
        window.alert(number1 / number2);
    });
})();
