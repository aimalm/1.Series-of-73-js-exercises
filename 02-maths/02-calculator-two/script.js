/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {
    
    var value1;
    var value2;
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("op-one").addEventListener("change", (event) => {
        value1 =  parseInt(document.getElementById("op-one").value);
    });

    document.getElementById("op-two").addEventListener("change", (event) => {
        value2 =  parseInt(document.getElementById("op-two").value);
    });

    const performOperation = operation => {
        // perform the operation
        switch(operation) {
            case 'addition':
                alert(value1 + value2);
                break;
            case 'substraction':
                alert(value1 - value2);
                break;
            case 'multiplication':
                alert(value1 * value2);
                break;
            case 'division':
                alert(value1 / value2);
                break;  
        }
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
