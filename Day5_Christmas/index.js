const clockTitle = document.querySelector("h2");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  const leftMil = xmasDay - date;

  const day = Math.floor(leftMil / (1000 * 60 * 60 * 24));
  const hours = Math.floor(leftMil / (1000 * 60 * 60)) - day * 24;
  const minutes =
    Math.floor(leftMil / (1000 * 60)) - day * 24 * 60 - hours * 60;
  const seconds =
    Math.floor(leftMil / 1000) -
    day * 24 * 60 * 60 -
    hours * 60 * 60 -
    minutes * 60;
  const dif = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerText = dif;
}

function init() {
  getTime();
  setInterval(getTime, 1000); //1초마다 getTime을 실행
}

init();