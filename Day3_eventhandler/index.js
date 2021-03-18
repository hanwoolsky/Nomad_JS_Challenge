const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const name = document.querySelector("h2");

const superEventHandler = {
  handlemouseEnter: function () {
    name.style.color = colors[0];
    name.innerHTML = "The mouse is here!"; //title 바꾸기
  },
  handlemouseLeave: function () {
    name.style.color = colors[1];
    name.innerHTML = "The mouse is gone!"; //title 바꾸기
  },
  handleResize: function () {
    name.style.color = colors[2];
    name.innerHTML = "You just resized!"; //title 바꾸기
  },
  handlecontextMenu: function () {
    name.style.color = colors[3];
    name.innerHTML = "That was a right click!"; //title 바꾸기
  }
};

function init() {
  name.addEventListener("mouseenter", superEventHandler.handlemouseEnter);
  name.addEventListener("mouseleave", superEventHandler.handlemouseLeave);
  window.addEventListener("resize", superEventHandler.handleResize);
  window.addEventListener("contextmenu", superEventHandler.handlecontextMenu);
}

init();
