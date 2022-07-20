/** @format */

const answer = [];

const moreTxt = document.querySelector("#NM_FAVORITE > div.group_nav > a");
const navItem = document.querySelectorAll(".nav_item");

console.log(navItem);
for (let i = 0; i < navItem.length; i++) {
  answer.push(navItem[i].innerText);
}
answer.push(moreTxt.textContent);

console.log(answer);
