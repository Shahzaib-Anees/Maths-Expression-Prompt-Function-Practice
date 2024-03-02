let user_input_num = +prompt(`Please give me a input in number`);
//independent IF Statment
if (user_input_num == 0) {
    user_input_num = 5;
}
document.write("<br>")
document.write("<br>")
document.write(`<span>The Table of ${user_input_num} is</span>`)


document.write("<br>")
for (a = 1; a < 11; a++) {
    document.write("<br>")
    document.write(`<p>${user_input_num}   x   ${a }  =   ${user_input_num * a}</p>`)
}
