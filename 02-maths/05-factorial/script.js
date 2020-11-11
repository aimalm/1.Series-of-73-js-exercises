/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
    let value;
    document.getElementById("number").value

    document.getElementById("run").addEventListener("click", function() {
        value = document.getElementById("number").value
        // your code here
        alert(factorial(value))

        function factorial(value) {
            if (value < 0) {
                  return -1;
            }
            else if (value == 0){ 
                return 1;
            }
            else {
                return (value * factorial(value - 1));
            }
          }

    });

})();
