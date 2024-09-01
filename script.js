function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if (noteInput.value.trim() !== "") {
        const newNote = document.createElement('li');

        // Contenido de la nota
        const noteText = document.createElement('span');
        noteText.textContent = noteInput.value;
        newNote.appendChild(noteText);

        // Botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('note-action-button', 'delete-button');
        deleteButton.onclick = function() {
            noteList.removeChild(newNote);
        };
        newNote.appendChild(deleteButton);

        // Botón de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('note-action-button', 'edit-button');
        editButton.onclick = function() {
            const newText = prompt("Edita tu nota:", noteText.textContent);
            if (newText !== null && newText.trim() !== "") {
                noteText.textContent = newText;
            }
        };
        newNote.appendChild(editButton);

        // Añadir la nueva nota a la lista
        noteList.appendChild(newNote);

        // Limpiar el campo de entrada
        noteInput.value = "";
    } else {
        alert("Por favor, escriba una nota antes de agregar.");
    }
}
