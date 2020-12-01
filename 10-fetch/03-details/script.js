/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
    let inputID = document.getElementById("hero-id")

    btn.addEventListener("click", () =>{
    let id = inputID.value

    fetch('http://localhost:3000/heroes')
    .then(
      function(response) {
        //console.log(response)

      
        response.json().then(function (heroes) {

           
            for(var i = 0; i < heroes.length; i++) {
                if (heroes[i].id == id) {
                    
                    //console.log(heroes[i].id)
                    var heroElement = tem.content.cloneNode(true);
                    heroElement.querySelector('.name').innerHTML = heroes[i].name;
                    heroElement.querySelector('.alter-ego').innerHTML = heroes[i].alterEgo;
                    heroElement.querySelector('.powers').innerHTML = heroes[i].abilities
                    targetElement.appendChild(heroElement);
                    break

                } /* else {
                    let invalidMsg = document.createElement("h2");
                    invalidMsg.innerHTML = "Invalid"
                    targetElement.appendChild(invalidMsg);
                } */
                

             };
             
        });
      }
    );
});

})();
