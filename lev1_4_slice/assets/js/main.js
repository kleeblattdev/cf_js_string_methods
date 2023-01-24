const A = 'Susi is going to codingschool';

const susi = A.slice(0,4);
const verb = A.slice(5,7);
const sentence = A.slice(5,16);
const school = A.slice(23,29);

document.write(susi + "<br>");
document.write(verb + "<br>");
document.write(sentence + " " + school + "<br>");
document.write(school + "<br>");
document.write(susi + " " + verb + " " + school);