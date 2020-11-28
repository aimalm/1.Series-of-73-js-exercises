/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.getElementById("target")
    const targetText = target.textContent;
    //console.log(targetText);

    let textArray = targetText.split("");
    //console.log(textArray);

    target.innerText = "";
    function wave (){
            let randNr = Math.floor(Math.random() * 8);
            
            return randNr;   

    }
    console.log(wave())
   
   
    
    textArray.forEach((e,i) => {
         

        var result = textArray[i].fontsize(wave());
      
        
        document.getElementById("target").innerHTML += result;


    })

    
   

})();
