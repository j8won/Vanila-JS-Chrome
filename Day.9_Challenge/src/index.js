const clockTitle = document.querySelector(".js-clock");

function untilChristmasEve() {
  const christmasDate = new Date("2022-12-24");
  const date = new Date();
  const left = christmasDate - date;

  const days = String(Math.floor(left / (1000 * 60 * 60 * 24)));
  const hours = String(Math.floor(left / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor(left / (1000 * 60)) % 60).padStart(2, "0");
  const seconds = String(Math.floor(left / 1000) % 60).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

untilChristmasEve();
setInterval(untilChristmasEve, 1000);
