const form = document.getElementById("form");
const Input = document.getElementById("Input");
const taskList = document.getElementById("taskList");
const title = document.querySelector("h1");

title.style.borderBottom = "2px solid black";
title.style.paddingBottom = "6px";

function addTask() {
    if (Input.value.trim() === "") return;

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "10px";
    li.style.margin = "6px";
    li.style.padding = "6px";
    li.style.border = "1px solid black";
    li.style.borderRadius = "8px";
    li.style.width = "260px";

    const buttonCircle = document.createElement("button");
    buttonCircle.style.borderRadius = "50%";
    buttonCircle.style.width = "25px";
    buttonCircle.style.height = "25px";
    buttonCircle.style.backgroundColor = "rgba(116, 64, 240, 1)";
    buttonCircle.style.color = "white";
    buttonCircle.style.border = "none";
    buttonCircle.style.cursor = "pointer";

    const text = document.createElement("span");
    text.textContent = Input.value;

    const buttonX = document.createElement("button");
    buttonX.textContent = "X";
    buttonX.style.marginLeft = "auto";
    buttonX.style.border = "none";
    buttonX.style.cursor = "pointer";
    buttonX.style.backgroundColor = "transparent";

    buttonCircle.addEventListener("click", () => {
        const done = text.style.textDecoration === "line-through";
        text.style.textDecoration = done ? "none" : "line-through";
        buttonCircle.textContent = done ? "" : "✓";
    });

    buttonX.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.append(buttonCircle, text, buttonX);
    taskList.appendChild(li);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
    Input.value = "";
});
