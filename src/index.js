import "./styles.css";
const lable = document.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const leftTime = new Date(xmasDay - Date.now());

  const date = Math.floor(leftTime / 1000 / 60 / 60 / 24);
  const hours =
    leftTime.getHours() - 9 < 0
      ? leftTime.getHours() - 9 + 24
      : leftTime.getHours() - 9;
  const minutes = leftTime.getMinutes();
  const seconds = leftTime.getSeconds();

  lable.innerText = `${date < 10 ? `0${date}` : date}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `${seconds}` : seconds
  }s`;
}

function init() {
  setInterval(() => getTime(), 1000);
}

init();
