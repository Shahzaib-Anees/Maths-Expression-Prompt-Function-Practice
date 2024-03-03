// User Greeter 
let user_name = prompt(`Please tell me your name!`);
alert(`Hello ${user_name}! Welcome to my Website`);
// 1
document.write("<br>");
document.write("<br>");
document.write("<h4>Question no 01</h4>")
document.write("<h3>Result</h3>")
let c = 10;
document.write("<br>");
document.write("<br>");
document.write("let c = 10;");


document.write("<br>");
document.write("<br>");
console.log(++c);//11
console.log(c);//11
document.write(`The value of ++c is : 11;`);
document.write(`Now the value of c is 11;`);


document.write("<br>");
document.write("<br>");
console.log(c++)//11
console.log(c);//12
document.write(`The value of c++ is 11;`);
document.write("<br>");
document.write(`Now the value of c is 12;`);

document.write("<br>");
document.write("<br>");
console.log(--c);//11
console.log(c);//11
document.write(`The value of --c is 11;`);
document.write("<br>");
document.write(`Now the value of c is 11;`);


document.write("<br>")
document.write("<br>")
console.log(c--);//11
console.log(c);//10
document.write(`The value of c-- is 11;`);
document.write("<br>")
document.write(`Now the value of c is 10;`);



document.write("<br>")
document.write("<br>")
// 2
document.write("<h4>Question no 02</h4>");
document.write(`In this question,I have consider two variables "a" & "b"`)
let a=2;
let b=1;


document.write("<br>")
let result = --a - --b + ++b + b;
document.write(`The result of equation is define as "result = --a - --b + ++b + b--;"`)


document.write("<br>")
document.write("<br>")
--a;
document.write("<span>--a;</span>")
document.write(`  //At this point; the decriment of 1 takes place at the variable "a" `)
document.write(`So the value of is "1" `)


document.write("<br>")
--b;
document.write("<br>")
document.write("<span>--b;</span>")
document.write(`  //At this point; the decriment of 1 takes place at the variable "b" `)
document.write(`So the value of is "0" `);


document.write("<br>")
document.write("<br>")
--a - --b;
document.write(`Therefore, <span>"- -a    -    - - b"</span> is equal to "1"`);


document.write("<br>")
document.write("<br>")
++b;
document.write(`<span>++b;</span>  //At this point; the incriment of 1 takes place at the variable "b"`);
document.write("<br>")
document.write(`So the value of b is  "2" `);

document.write("<br>")
document.write("<br>")
--a - --b + ++b;
document.write(`Therefore, <span>"- -a    -    - - b   +   + + b"</span> is equal to "3"`);


document.write("<br>")
document.write("<br>")
b--;
document.write(`<span>b--;</span>  //At this point; the decriment of 1 takes place at the variable "b"`);
document.write("<br>")
document.write(`So the value of b is  "0" `);

document.write("<br>")
document.write("<br>")
--a - --b;
document.write(`Therefore, <span>"- -a    -    - - b   +   + + b   +   b - -"</span> is equal to "3"`);



document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write(`<span>The Result is equal to ${result}</span>`);
