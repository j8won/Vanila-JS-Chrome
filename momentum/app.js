const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handelWindowCopy() {
  alert("copier!");
}

function handleWindowoffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("all goooood");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handelWindowCopy);
window.addEventListener("offline", handleWindowoffline);
window.addEventListener("online", handleWindowOnline);
