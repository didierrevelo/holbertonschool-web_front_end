/**
 * It takes two arguments: firstName (string) and lastName (string)
 * It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
 * Within the welcome function, write a function named displayFullName:
 * It should display an alert with the message Welcome + the variable fullName + and exclamation mark.
 * Call the function displayFullName at the end of the function welcome
 */

function welcome(firstName, lastName) {
    const fullName = `${firstName } ${lastName}`;

    function printFullName() {
        alert(`Welcome ${fullName}!`);
    }
    printFullName();
}