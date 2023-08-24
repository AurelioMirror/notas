const notesList = document.getElementById("notes-list");
const noteContent = document.getElementById("note-content");
const saveButton = document.getElementById("save-button");

let notes = [];

function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
            <p class="note-content">${note}</p>
            <button class="edit-button" onclick="editNote(${index})">Editar</button>
            <button class="delete-button" onclick="deleteNote(${index})">Excluir</button>
        `;
        notesList.appendChild(noteElement);
    });
}

function editNote(index) {
    noteContent.value = notes[index];
    saveButton.textContent = "Salvar Edição";
    saveButton.onclick = () => saveEditedNote(index);
}

function saveEditedNote(index) {
    notes[index] = noteContent.value;
    renderNotes();
    noteContent.value = "";
    saveButton.textContent = "Salvar";
    saveButton.onclick = saveNote;
}

function saveNote() {
    const content = noteContent.value;
    if (content.trim() !== "") {
        notes.push(content);
        renderNotes();
        noteContent.value = "";
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}
saveButton.onclick = saveNote;







