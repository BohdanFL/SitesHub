//Theme selector:

const LightThemeButton = document.getElementById("LightModeButton");
const NightThemeButton = document.getElementById("NightModeButton");
const AutoThemeButton = document.getElementById("AutoModeButton");
const html = document.documentElement;

function LightModeSelect() {
  LightThemeButton.classList.add("selected");
  NightThemeButton.classList.remove("selected");
  AutoThemeButton.classList.remove("selected");

  html.className = "LightMode";
}

function NightModeSelect() {
  LightThemeButton.classList.remove("selected");
  NightThemeButton.classList.add("selected");
  AutoThemeButton.classList.remove("selected");

  html.className = "NightMode";
}

function AutoModeSelect() {
  LightThemeButton.classList.remove("selected");
  NightThemeButton.classList.remove("selected");
  AutoThemeButton.classList.add("selected");

  html.className = "AutoMode";
}

// Sidebar:

const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");

function SidebarOpen() {
  Sidebar.classList.remove("close");
  Sidebar.classList.add("open");
}

function SidebarClose() {
  Sidebar.classList.remove("open");
  Sidebar.classList.add("close");
}

function SidebarBut() {
  if (Sidebar.classList.contains("close")) {
    SidebarOpen();
  } else if (Sidebar.classList.contains("open")) {
    SidebarClose();
  } else {
    Sidebar.classList.add("open");
  }
}

function SidebarForciblyClose() {
  if (Sidebar.classList.contains("open")) {
    SidebarClose();
  }
}

//

const answersPhysics = [
  [
    [2, 10, 1, 4, 11, 3, 5, 12, 6, 7],
    [6, 9, 2, 10, 3, 4, 1, 11, 5, 7],
  ],
  [
    [12, 1, 7, 5, 13, 6, 3, 11, 8, 2, ],
    [12, 11, 7, 1, 10, 2, 3, 4, 5, 8],
  ],
  [
    [3, 9, 1, 7, 2, 4, 5, 2, 6, 10],
    [8, 6, 7, 4, 9, 3, 10, 2, 11, 1],
  ],
  [
    [5, 1, 12, 9, 3, 8, 13, 2, 7, 6],
    [7, 4, 10, 3, 5, 2, 6, 1, 8, 9],
  ],
  [
    [7, 10, 5, 2, 11, 1, 3, 4, 8, 6],
    [5, 12, 2, 7, 4, 8, 1, 3, 9, 6],
  ],
  [
    [12, 8, 11, 9, 7, 6, 10, 5, 1, 2],
    [4, 10, 2, 5, 3, 7, 12, 8, 6, 1],
  ],
  [
    [4, 5, 12, 3, 10, 1, 6, 11, 7, 2],
    [3, 12, 4, 5, 6, 11, 9, 10, 1, 2],
  ],
  [
    [3, 9, 1, 7, 11, 4, 5, 8, 6, 10],
    [8, 5, 1, 4, 7, 10, 12, 2, 9, 6],
  ],
  [
    [12, 4, 13, 9, 1, 5, 11, 8, 3, 6],
    [11, 1, 12, 5, 10, 3, 9, 4, 13, 7],
  ],
  [
    [7, 13, 6, 5, 10, 11, 4, 3, 8, 1],
    [9, 4, 6, 8, 1, 3, 12, 7, 5, 2],
  ],
  [
    [7, 10, 12, 4, 3, 11, 5, 1, 6, 2],
    [7, 9, 1, 3, 8, 4, 2, 12, 5, 6],
  ],
  [
    [1, 12, 7, 13, 5, 6, 2, 3, 8, 11],
    [12, 1, 7, 3, 10, 2, 13, 4, 8, 5],
  ],
  [
    [3, 9, 1, 7, 2, 4, 5, 8, 6, 10],
    [8, 6, 7, 4, 9, 3, 10, 2, 11, 1],
  ],
  [
    [5, 1, 12, 9, 3, 8, 13, 2, 7, 6],
    [7, 4, 10, 3, 5, 2, 6, 1, 8, 9],
  ],
  [
    [7, 10, 5, 2, 11, 13, 3, 4, 8, 6],
    [5, 1, 13, 7, 4, 8, 12, 3, 9, 6],
  ],
  [
    [12, 8, 11, 9, 7, 6, 10, 5, 1, 2],
    [4, 10, 2, 5, 13, 7, 12, 8, 6, 1],
  ],
  [
    [4, 5, 12, 3, 10, 1, 6, 11, 9, 2],
    [13, 12, 4, 5, 6, 11, 9, 10, 1, 2],
  ],
  [
    [3, 9, 1, 7, 13, 4, 5, 8, 6, 10],
    [8, 5, 1, 4, 7, 10, 13, 2, 9, 6],
  ],
  [
    [12, 4, 10, 9, 1, 5, 11, 13, 3, 6],
    [11, 1, 12, 5, 10, 3, 9, 4, 8, 7],
  ],
  [
    [8, 7, 12, 10, 6, 5, 11, 4, 3, 1],
    [13, 9, 4, 6, 8, 1, 3, 12, 7, 5],
  ],
  [
    [3, 9, 1, 7, 11, 4, 5, 8, 6, 10],
    [13, 5, 1, 4, 7, 10, 12, 2, 9, 6],
  ],
  [
    [6, 5, 1, 12, 9, 3, 8, 13, 2, 7],
    [9, 8, 7, 4, 10, 3, 5, 2, 6, 1],
  ],
  [
    [3, 9, 1, 7, 2, 4, 5, 2, 6, 10],
    [8, 6, 7, 4, 9, 3, 10, 2, 11, 1],
  ],
  [
    [5, 1, 12, 9, 3, 8, 13, 2, 7, 6],
    [7, 4, 10, 3, 5, 2, 6, 1, 8, 9],
  ],
  [
    [1, 12, 7, 13, 5, 6, 2, 3, 8, 11],
    [12, 1, 7, 3, 10, 2, 13, 4, 8, 5],
  ],
];

const answersPDR = [
  [[3,4,2,3,4,3,1,2,2,1,3,3,3,2,3,2,3,1,2,3]], 
  [[3,5,3,1,1,3,1,2,1,2,2,3,1,3,3,1,4,2,2,1]], 
  [[1,2,4,2,2,2,1,2,3,2,2,3,5,3,2,3,2,2,1,3]],
  [[1,3,5,2,4,1,2,1,2,2,2,1,2,1,1,2,2,4,4,3]], 
  [[4,1,2,3,4,1,1,2,3,1,3,2,1,5,1,3,5,3,5,2]], 
  [[4,5,2,4,3,3,2,3,4,2,2,2,3,5,2,1,1,3,3,2]], 
  [[2,3,3,4,1,3,3,3,1,2,1,3,3,3,1,3,2,4,4,1]], 
  [[1,2,3,2,2,3,3,1,1,2,3,3,3,2,3,4,1,1,2,2]], 
  [[4,2,2,1,2,1,4,2,2,1,2,4,2,1,2,1,2,2,4,3]], 
  [[1,1,2,2,1,3,2,2,1,"2/3",1,3,2,2,1,5,2,1,4,1]], 
  [[1,1,3,2,4,2,2,2,2,2,2,2,2,1,3,4,4,3,1,3]],
];

const answersHTML = document.querySelector(".answers");
const confirmPhysicsBtn = document.getElementById("#confirmPhysics");
const confirmPdrBtn = document.getElementById("#confirmPDR");
const searchBtn = document.querySelector(".search");

function validate(answers) {
  const value = searchBtn.value.trim();
  if (value > 0 && value <= answers.length) {
    getAnswers(answers, value - 1);
  } 
  else if (value == 69) {
  	answersHTML.innerHTML =
      '<h2 class="warning">You are GEY</h2>';
  }
  else if (value == 2004) {
  	answersHTML.innerHTML =
      '<h2 class="warning">The site was made by Andrii and Bohdan</h2>';
  }
  else {
    answersHTML.innerHTML =
      '<h2 class="warning">Ви ввели неіснуючий номер білету</h2>';
  }
}

function getAnswers(answers, index) {
  let html = ``;
  const ticket = answers[index];
  answersHTML.innerHTML = "";

  html += `<p class="answers__number">Білет: ${index + 1}<p>`;
  ticket.forEach((level, i) => {
    if (ticket.length > 1) {
      html += `<h3>Завдання ${i + 1}</h3>`;
    }

    if (ticket.length === 1 && ticket[0].length > 10) {
      let rows = Math.trunc((ticket[0].length + 1) / 10);

      for (let i = 0, start = 0; i <= rows; ++i, start = i * 10) {
        html += `<table>`;
        html += `<tr>`;
        console.log(start)
        for (let j = start; j < level.length && j < start + 10; j++) {
          html += `<th>${j + 1}</th>`;
        }

        html += `</tr><tr>`;

        for (let k = start; k < level.length && k < start + 10; k++) {
          const answer = level[k];
          html += `<td>${answer}</td>`;
        }

        html += `</tr>`;
        html += `</table>`;
      }
    } else {
      html += `<table>`;
      html += `<tr>`;
      level.forEach((_, j) => {
        html += `<th>${j + 1}</th>`;
      });

      html += `</tr><tr>`;

      level.forEach((answer) => {
        html += `<td>${answer}</td>`;
      });

      html += `</tr>`;
      html += `</table>`;
    }
  });
  answersHTML.insertAdjacentHTML("beforeend", html);
}

confirmPhysicsBtn &&
  confirmPhysicsBtn.addEventListener("click", () => {
    validate(answersPhysics);
  });

confirmPdrBtn &&
  confirmPdrBtn.addEventListener("click", () => {
    validate(answersPDR);
  });

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    confirmPhysicsBtn && confirmPhysicsBtn.click();
    confirmPdrBtn && confirmPdrBtn.click();
  }
});
