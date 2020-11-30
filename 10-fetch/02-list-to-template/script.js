/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const tem = document.querySelector("#tpl-hero")
    let targetElement = document.getElementById('target');
    const btn = document.getElementById("run")
    console.log(tem)

    btn.addEventListener("click", () =>{
    
  
    fetch('http://localhost:3000/heroes')
    .then(
      function(response) {
        //console.log(response)

      
        response.json().then(function (heroes) {
         
            heroes.forEach(hero=> {

              var heroElement = tem.content.cloneNode(true);
              heroElement.querySelector('.name').innerHTML = hero.name;
              heroElement.querySelector('.alter-ego').innerHTML = hero.alterEgo;
              heroElement.querySelector('.powers').innerHTML = hero.abilities
              console.log(hero.name)
              targetElement.appendChild(heroElement);

            });
          })

           
        });
      }
    )
   
})();
