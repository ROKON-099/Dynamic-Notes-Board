const noteinput = document.getElementById("noteinput");
const addbtn = document.getElementById("addbtn");
const notesContainer = document.getElementById("notesContainer");

addbtn.addEventListener("click", function () {

    const noteText = noteinput.value.trim();

    if (noteText === "") {
        alert("Please write a note");
        return;
    }

    const note = document.createElement("div");

    note.classList.add("note");

    note.innerHTML = `
        <p>${noteText}</p>
        <button class="delete">Delete</button>
    `;

    notesContainer.appendChild(note);

    noteinput.value = "";

    const deletebtn = note.querySelector(".delete");

    deletebtn.addEventListener("click", function () {
        note.remove();
    });

});