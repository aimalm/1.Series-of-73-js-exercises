/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let div = document.getElementById("target");

    let table = document.createElement("table");
    div.appendChild(table)

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i = 1; i <=10 ; i++){
        let tr = document.createElement("tr")
        tr.className = "rows"
        tbody.appendChild(tr);
        for (let j = 1; j <= 10; j++){
            let td = document.createElement("td");
            tr.appendChild(td); 
            td.textContent = (j * i) 
        }
    }

})();
