// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseOnText: function (event) {
    textContainer.innerText = "mouse over text";
    textContainer.style.color = "#3498db";
  },
  mouseLeaveText: function (event) {
    textContainer.innerText = "mouse out text";
    textContainer.style.color = "#9b59b6";
  },
  resizeText: function (event) {
    textContainer.innerText = "window is resize";
    textContainer.style.color = "#f39c12";
  },
  mouseRightClick: function (event) {
    textContainer.innerText = "text right clicked";
    textContainer.style.color = "#e74c3c";
  }
};

const textContainer = document.querySelector("h2");

/*
function mouseOnText(event) {
  textContainer.innerText = "mouse over text";
  textContainer.style.color = "#3498db";
}

function mouseLeaveText(event) {
  textContainer.innerText = "mouse out text";
  textContainer.style.color = "#9b59b6";
}

function resizeText(event) {
  textContainer.innerText = "window is resize";
  textContainer.style.color = "#f39c12";
}

function mouseRightClick(event) {
  textContainer.innerText = "text right clicked";
  textContainer.style.color = "#e74c3c";
}
*/

textContainer.addEventListener("mouseenter", superEventHandler.mouseOnText);
textContainer.addEventListener("mouseleave", superEventHandler.mouseLeaveText);
textContainer.addEventListener(
  "contextmenu",
  superEventHandler.mouseRightClick
);
window.addEventListener("resize", superEventHandler.resizeText);
