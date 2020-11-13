/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let currentDate = new Date();
        let birthDate = new Date(

            document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value
        );

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
    
        if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate() )){

            age = age - 1;
        }
        document.getElementById("result").innerHTML = "<h2> Your are" + age + "old </h2>";

        //console.log(age)
            
    });

})();
