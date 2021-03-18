const toDoForm = document.querySelector(".task"),
  Input = toDoForm.querySelector("input"),
  pend = document.querySelector(".pending"),
  fin = document.querySelector(".finished");

const TODOS_LS = "PENDING";
const CHECK_LS = "FINISHED";

let pends = [];
let fins = [];

function filterFn(toDo) {
  return toDo.id === 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pend.removeChild(li);
  const cleanToDos = pends.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pends = cleanToDos;
  saveToDos();
}

function cdeleteToDo(event) {
  const dbtn = event.target;
  const dli = dbtn.parentNode;
  fin.removeChild(dli);
  const cleanchecked = fins.filter(function (toDo) {
    return toDo.id !== parseInt(dli.id);
  });
  fins = cleanchecked;
  saveToDos();
}

function checkToDo(event) {
  deleteToDo(event);
  const passedValue = event.target.parentNode.querySelector("span");
  paintCheck(passedValue.innerText);
  passedValue.innerText = "";
}

function backToDo(event) {
  cdeleteToDo(event);
  const passedValue = event.target.parentNode.querySelector("span");
  paintToDo(passedValue.innerText);
  passedValue.innerText = "";
}

function paintCheck(text) {
  const cli = document.createElement("li");
  const cdelBtn = document.createElement("button");
  const ccheckBtn = document.createElement("button");
  const cspan = document.createElement("span");
  const cnewId = fins.length + 1;
  cdelBtn.innerText = "❌";
  cdelBtn.addEventListener("click", cdeleteToDo);
  ccheckBtn.innerText = "❗";
  ccheckBtn.addEventListener("click", backToDo);
  cspan.innerText = text;
  cli.appendChild(cspan);
  cli.appendChild(cdelBtn);
  cli.appendChild(ccheckBtn);
  cli.id = cnewId;
  fin.appendChild(cli);
  const toDoObj = {
    text: text,
    id: cnewId
  };
  fins.push(toDoObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(pends));
  localStorage.setItem(CHECK_LS, JSON.stringify(fins));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pends.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", checkToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  pend.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pends.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = Input.value;
  paintToDo(currentValue);
  Input.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedChecked = localStorage.getItem(CHECK_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
  if (loadedChecked !== null) {
    const parsedChecked = JSON.parse(loadedChecked);
    parsedChecked.forEach(function (toDo) {
      paintCheck(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
