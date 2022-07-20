/** @format */

const txt = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong"
);

alert(txt.textContent);
txt.textContent = "고니의 여행";
