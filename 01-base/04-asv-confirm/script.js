/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age;
    let gender;
    let city;

    do {
      age = prompt("what is your age?");
    } while (!age);
    confirm("your age is " + age);

    do {
      gender = prompt("what is your gender?");
    } while (!gender);
    confirm("you are " + gender);

    do {
      city = prompt("what is your city?");
    } while (!city);
    confirm("your city is " + city);
       
})();
