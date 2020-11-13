/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value
    let numbers = document.getElementById("numbers").value;
    
    document.getElementById("run").addEventListener("click", function() {

        // your code here
        arr = JSON.parse ("["+numbers+"]");
        numbers = arr.sort(function(a, b){return a-b});
        document.getElementById("numbers").value = numbers;
    });

})();
