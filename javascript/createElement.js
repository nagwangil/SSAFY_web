/** @format */
const div = document.createElement("div");
for (let i = 1; i <= 5; i++) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "sample-btn" + i);
  const txt = document.createTextNode("버튼" + i);
  btn.append(txt);
  btn.addEventListener("click", function () {
    alert("안녕 버튼 " + i);
  });

  div.append(btn);
}
document.querySelector("body").append(div);
