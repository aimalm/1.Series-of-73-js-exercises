/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
    fetch('https://restcountries.eu/rest/v2/all')
  .then(
    function(response) {
    
      response.json().then(function(countries) {
          countries.forEach(element => {
              console.log(element.name)
              
          });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
})();
