/** @format */

document.querySelector(".lalala").textContent = "ㅎㅎ";

console.log(document.querySelectorAll(".lalala"));

const lalalala = document.querySelectorAll(".lalala");
console.log(lalalala[0].textContent);

for (let i = 0; i < 5; i++) {
  lalalala[i].textContent = "yes";
}
