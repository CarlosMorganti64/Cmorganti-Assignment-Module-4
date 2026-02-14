//Variables
let firstName = "Cole";
let lastName = "Vico";
let fullName = firstName + " " + lastName;
let age = 18;
let favoriteColor = "Cyan";

// Conatenated String Variables 
let sentence1 = "My name is " + fullName + ".";
let sentence2 = "I am " + age + " years old.";
let sentence3 = "My favorite color is " + favoriteColor + ".";

// Output to console
console.log(sentence1);
console.log(sentence2);
console.log(sentence3);

//output to webpage
document.getElementById("output").innerHTML = sentence1 + "<br>" + sentence2 + "<br>" + sentence3;

//"If" Conditional statement
if (age === 18) {
    console.log("haha you are an adult.");
} else {
    console.log("haha you're not an adult.");
}

//Switch Statement
switch (favoriteColor) {
    case "Cyan":
        console.log("You have a good favorite color.");
        break;
        case "Lime":
        console.log("Also a good pick.");
        break;
           case "University of Pennsylvania red":
        console.log("Wow... You actually know that color? Impressive.");
        break;
    default:
        console.log("You are entitled to your opinion and that's great.");
}

//String Method 
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);

//Number Method
let roundedAge = Math.round(age);
console.log(roundedAge);
