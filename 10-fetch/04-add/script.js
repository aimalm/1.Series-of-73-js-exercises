/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    fetch('http://localhost:3000/heroes')
    .then(
      function(response) {
        //console.log(response)

      
        response.json().then(function (heroes) {

           console.log(heroes.length)
           let id = [];
           for (let i = 0; i < heroes.length; i++){
            id.push(heroes[i].id)
           }
           let maxId = Math.max(...id);
           console.log(maxId)
           

           
                

             
             
        });
      }
    );
})();
