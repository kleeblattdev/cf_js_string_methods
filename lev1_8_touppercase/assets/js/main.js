const text = "Sam is going to codingschool";
console.log(text.length);

const sam = text.slice(0,3);
const school = text.slice(22,28);
const sentence = text.slice(4,22);
console.log(sentence);

document.write(text.toUpperCase() + "<br>");
document.write(text.toLowerCase() + "<br>");
document.write(sam.toUpperCase() + sentence + school.toUpperCase() + "<br>");

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = text.split(" ");

//loop through each element of the array and capitalize the first letter.

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const text2 = arr.join(" ");
document.write(text2);