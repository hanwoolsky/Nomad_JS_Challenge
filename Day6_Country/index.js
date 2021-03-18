const select = document.querySelector(".js-select");
const USER_LS = "country";

function saveCountry(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSelect(event) {
  const currentValue = event.target.value;
  saveCountry(currentValue);
}

function askForCountry() {
  select.addEventListener("change", handleSelect);
}

function init() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForCountry();
  } else {
    select.querySelector("option").innerHTML = currentUser;
  }
}

init();