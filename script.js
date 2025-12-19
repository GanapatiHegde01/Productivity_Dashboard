function openPages() {
  const allCards = document.querySelectorAll(".elem");
  const page = document.querySelectorAll(".page");
  const closeBtn = document.querySelectorAll(".close-btn");

  allCards.forEach((elem) => {
    elem.addEventListener("click", () => {
      page[elem.id].style.display = "block";
    });
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      page[btn.id].style.display = "none";
    });
  });
}

openPages();



let allTasks = [
  { todo: "Code", description: "Code for 1 hour", important: true },
  { todo: "Eat", description: "Eat for 1 hour", important: false },
];

const todoInput = document.querySelector(".todo-input");
const todoDescription = document.querySelector(".todo-description");
const todoImp = document.querySelector("#important");
const todoForm = document.querySelector(".todo-form form");

function renderCards() {
  const taskContainer = document.querySelector(".todo-tasks");
  let task = "";

  allTasks.forEach((data) => {
    task += `
   <div class="todo-card">
              <h4>${data.todo}<span class=${
      data.important ? "important" : "not-imp"
    }> Imp</span></h4> 
              <p>
               ${data.description}
              </p>

              <div class="card-footer">
                <button class="imp-btn">Completed</button>
                <button class="delete-btn"><i class="ri-delete-bin-6-line"></i></button>
               
              </div>
            </div>
  `;
  });

  taskContainer.innerHTML = task;
}

renderCards();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  allTasks.push({
    todo: todoInput.value,
    description: todoDescription.value,
    important: todoImp.value,
  });
  renderCards();
  todoInput.value = "";
  todoDescription.value = "";
  important.checked = false;
});
