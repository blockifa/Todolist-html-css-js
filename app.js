const squareColor = ["#6cc24a", "#b580d1", "#e0457b"];
const todos = [
  { id: 0, text: "", done: false, close: false },
  { id: 1, text: "", done: false, close: false },
  { id: 2, text: "", done: false, close: false },
];

window.onload = function () {
  show();
};
function show() {
  const divEL = document.getElementById("todoDiv");
  divEL.innerHTML = "";
  const element = document.getElementById("undone");
  element.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].close == false) {
      let todo = `<div id="addTask" style="display: flex">
  <button onclick="doneTask(${todos[i].id})">
  ${
    todos[i].done == false
      ? `<div class="Square" style="border:3px solid ${
          squareColor[i % 3]
        }"></div>`
      : `<svg xmlns="http://www.w3.org/2000/svg" style="margin: 10px 15px; width:19px; height:16px; " color="${
          squareColor[i % 3]
        }" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>`
  }
  </button>

  <input type="text" value="${todos[i].text}" 
  style="color:${todos[i].done ? squareColor[i%3] : "black"}; border:${
        todos[i].done ? "none" : "border-bottom: 2px dashed black"
      } "oninput="(function(e, id) {update(e, id)})(arguments[0], ${
        todos[i].id
      })"/>

  <button class="dltstyle" onclick="deleteTask(${todos[i].id})">
    <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-6 h-6"
      color="${squareColor[i % 3]}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg></button
  ><br />
  </div>`;

      divEL.insertAdjacentHTML("beforeend", todo);
    } else if (todos[i].done == false) {
      const li = `<li style="padding-bottom:5px">${todos[i].text}</li>`;
      element.insertAdjacentHTML("beforeend", li);
    }
  }
  console.log(todos);
}

function update(e, id) {
  const index = todos.findIndex((todo) => todo.id == id);
  if (todos[index].id == id) todos[index].text = e.target.value;
}

function doneTask(id) {
  const index = todos.findIndex((todo) => todo.id == id);
  if (todos[index].text != undefined && todos[index].text != "") {
    todos[index].done = true;
    show();
    
  }
}

function deleteTask(id) {
  const index = todos.findIndex((todo) => todo.id == id);
  if (todos[index].text == undefined || todos[index].text == "") {
    todos.splice(index, 1);
    // console.log(todos)
  } else {
    todos[index].close = true;
  }

  show();
}

function add() {
  if (todos.length != 0) {
    let idmax = Math.max(...todos.map((i) => i.id)) + 1;
    todos.push({ id: idmax, text: "", done: false, close: false });
  } else {
    todos.push({ id: 0, text: "", done: false, close: false });
  }
  show();
}
