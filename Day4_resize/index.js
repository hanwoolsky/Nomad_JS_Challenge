function handleResize() {
  if (window.innerWidth < 650) {
    document.body.style.backgroundColor = "#2b3de2";
  } else if (window.innerWidth < 800) {
    document.body.style.backgroundColor = "#8a2be2";
  } else {
    document.body.style.backgroundColor = "#d7e23e";
  }
}

function init() {
  window.addEventListener("resize", handleResize);
}

init();