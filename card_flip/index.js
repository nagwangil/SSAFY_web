/** @format */
const cardArray = [
  {
    name: "cat",
    img: "./img/07-kitten-cuteness-1.jpg",
    id: null,
    done: false,
  },
  {
    name: "cat",
    img: "./img/07-kitten-cuteness-1.jpg",
    id: null,
    done: false,
  },
  {
    name: "wolf",
    img: "./img/wolf.jpg",
    id: null,
    done: false,
  },
  {
    name: "wolf",
    img: "./img/wolf.jpg",
    id: null,
    done: false,
  },
  {
    name: "bear",
    img: "./img/polar_bears.jpg",
    id: null,
    done: false,
  },
  {
    name: "bear",
    img: "./img/polar_bears.jpg",
    id: null,
    done: false,
  },
  {
    name: "jaguar",
    img: "./img/jaguar0.jpg",
    id: null,
    done: false,
  },
  {
    name: "jaguar",
    img: "./img/jaguar0.jpg",
    id: null,
    done: false,
  },
  {
    name: "camel",
    img: "./img/adaptations6.jpg",
    id: null,
    done: false,
  },
  {
    name: "camel",
    img: "./img/adaptations6.jpg",
    id: null,
    done: false,
  },
  {
    name: "tiger",
    img: "./img/tiger.jpg",
    id: null,
    done: false,
  },
  {
    name: "tiger",
    img: "./img/tiger.jpg",
    id: null,
    done: false,
  },
];

let clickfirst = -1;
let clicksecond = -1;
let clickCount = 0;

const setClickHistory = (location) => {
  if (clickfirst === -1) {
    clickfirst = location;
  } else {
    clicksecond = location;
  }
};

const backflip = () => {
  const parsedIdFirst = cardArray[clickfirst].id.split("-");
  const parsedIdSecond = cardArray[clicksecond].id.split("-");

  setTimeout(() => {
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
      "./img/red-3d-question-mark.jpg";
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
      "./img/red-3d-question-mark.jpg";
  }, 500);
};

const isCorrect = () => {
  if (cardArray[clickfirst].name === cardArray[clicksecond].name) {
    cardArray[clickfirst].done = true;
    cardArray[clicksecond].done = true;
  } else {
    console.log("일치 안함");
    backflip();
  }
};

const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);

    const parsedId = cardArray[location].id.split("-");
    gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src =
      cardArray[location].img;

    clickCount++;
    if (clickCount === 2) {
      clickCount = 0;
      isCorrect();
    }

    console.log(clickfirst, clicksecond);
    if (clickfirst !== -1 && clicksecond !== -1) {
      clickfirst = -1;
      clicksecond = -1;
    }
  }
};

const gameDOM = [];

const getGameDom = () => {
  const rows = document.querySelectorAll(".container .row");
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
    console.log("getgameDom 함수 실행");
  }
};

const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./img/red-3d-question-mark.jpg");
      gameDOM[i][j].appendChild(card);
    }
  }
};

getGameDom();
cardArray.sort(() => 0.5 - Math.random());
setIDtoCardArray();
createBoard();
