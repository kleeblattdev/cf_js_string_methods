const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";
const text5 = "to the movie theater";

const solu1 = text1.concat(" ",text4, " ", text5);
const solu2 = text1.replace("codingschool", "movie theater");
const solu3 = text2.concat(" ", text4, " ", text1.replace("is", "are"));
const solu4 = solu3.replace("codingschool", "gym").concat(" ",text4, " ", text5);
const solu5 = text1.replace("Sam",text2).concat(" ",text4, " ", text5);

document.write(solu1 + "<br>");
document.write(solu2 + "<br>");
document.write(solu3 + "<br>");
document.write(solu4 + "<br>");
document.write(solu5 + "<br>");