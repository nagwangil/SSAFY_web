const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const headerNav = document.querySelector(".header-nav");
const bookmarkWrapper = document.querySelector(".bookmark-wrapper");
const texts = document.querySelectorAll(".text");

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("toggle-button-darkmode");
  body.classList.toggle("body-background-darkmode");
  headerNav.classList.toggle("text-darkmode");
  bookmarkWrapper.classList.toggle("text-darkmode");
  //classlist contains 활용
  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.toggle("text-darkmode");
  }

  if (toggleButton.classList.contains("toggle-button-darkmode")) {
    toggleButton.textContent = "일반 모드";
  } else {
    toggleButton.textContent = "다크 모드";
  }
});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    console.log("가즈아!");
    if (!e.target.value) {
      alert("검색어를 입력하지 않았습니다!");
      return;
    }
    const target = "https://www.google.com/search?q=" + e.target.value;

    // 그냥 이동
    //location.href = target;
    //새탭 이동
    window.open(target + e.target.value);
  }
});
