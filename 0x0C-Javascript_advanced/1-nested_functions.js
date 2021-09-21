/** 
 * Create a variable named globalVariable with value Welcome
 * Create a function outer that:
 * alerts the content of the variable globalVariable
 * creates a variable named course with value Holberton
 * creates a function inner that:
 * alerts the content of the variable globalVariable and course (concatenated)
 * creates a variable named exclamation with value !
 * creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
 * calls the function inception
 * calls the function inner
 * Call the function outer
 */
const globalVariable = "Welcome";

function outer() {
    alert(globalVariable);
    const course = "Holberton";

    function inner() {
        alert(globalVariable + " " + course)
        const exclamation = "!";

        function inception() {
            alert(globalVariable + " " + course + exclamation)
        }
        inception();
    }
    inner();
}
outer();