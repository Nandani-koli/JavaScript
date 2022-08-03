
const addButton = document.querySelector('#add');

const updateLSdata = () => {
    const textarea = document.querySelectorAll('textarea');
    const notes = [];

    textarea.forEach((note) => {
        return notes.push(note.value);
    })

    //now store this notes array on localstorage
    //localstorage only store key: value pair not array and object thats why we use JSON stringfy

    localStorage.setItem('journal', JSON.stringify(notes));
}

const addnewnote = (text = '') => {

    //dynamic create note 
    const note = document.createElement('div');
    note.classList.add('note');

    const htmldata = `
    <button id="create" class="btn">Download</button>
    <p>${new Date().toLocaleString()}</p>
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    note.insertAdjacentHTML('afterbegin', htmldata);
    document.body.appendChild(note);

    const edit = note.querySelector('.edit');
    const del = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    const create = note.querySelector('.btn');

    //download file (create a file from the textarea's text)
    create.addEventListener('click', () => {
        var text = document.querySelector('textarea').value;
        var filename = new Date().toLocaleString();
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

        saveAs(blob, filename);
    });

    //delete a note
    del.addEventListener('click', () => {
        note.remove();

        //update localstorage when after deleting a note
        updateLSdata();
    })

    // previous written text 
    textarea.value = text;
    main.innerHTML = text;


    //Toggle(switch) between adding and removing a class name from an element using Edit button
    edit.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    //take the user intered text from textarea and also display that on main
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        main.innerHTML = value;

        //save the data on local storage
        updateLSdata();
    })

}

//getback data from localstorage
const notes = JSON.parse(localStorage.getItem('journal'));
if (notes) {
    notes.forEach((note) => addnewnote(note));
}


addButton.addEventListener('click', () => addnewnote());
