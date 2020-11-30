/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let newText =["Welcome To Our Website"]
    let index = 0;
    let count = 0;
    let currentText = "";
    let letter="";


    const text = document.getElementById("target");
    
    function typing() {
        if (count === newText.length){
            count = 0;
        }
        
        currentText = newText[count]
        letter = currentText.slice(0, ++index)

        text.innerHTML = letter;

        if (letter.length === currentText.length){
            count++;
            index = 0;
        }

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
           
          setTimeout(typing, getRndInteger(100, 600));
        
    }
    typing()

})();
