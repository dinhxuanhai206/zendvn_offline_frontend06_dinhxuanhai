const ITEMS_LEVEL = [
    {
        value: 0,
        color: 'bg-dark',
        text: 'Small',
    },
    {
        value: 1,
        color: 'bg-info',
        text: 'Medium',
    },
    {
        value: 2,
        color: 'bg-danger',
        text: 'High',
    },
];

let btnAddTask = document.getElementById('addTask');
let areaForm = document.getElementById('area-form');
let areaListTask = document.getElementById('area-list-task');
let dropDownItem = document.getElementsByClassName('dropdown-item');
let inputName = document.getElementById('input-name');
let inputLevel = document.getElementById('input-level');
let search = document.getElementById('btn-search');
let sortBy = 'name';
let sortDir = 'asc';


// let items = [
//     {
//         id: makeID(),
//         name: 'task 1',
//         level: 0,
//     },
//     {
//         id: makeID(),
//         name: 'task 2',
//         level: 1,
//     },
//     {
//         id: makeID(),
//         name: 'task 3',
//         level: 2,
//     },
// ];

// localStorage.setItem('TODOS_ITEMS', JSON.stringify(items))
//  saveStorage(items);
let items = loadStorage();
showItems(items);

// EVENTS
btnAddTask.addEventListener('click', function () {
    let isShowForm = areaForm.classList.contains('d-none');
    toggleForm(isShowForm);
});

dropDownItem.forEach(element => {
element.addEventListener('click', function(){
    sortBy = element.getAttribute('data-sort-by');
    sortDir = element.getAttribute('data-sort-dir');
    showShortDisplay();
});   
});



document.getElementById('area-list-task').addEventListener('click', function (e) {
    let element = e.target;
    if (element.classList.contains('btn-delete')){

    let id = element.getAttribute('data-id');
        for (let index = 0; index < items.length; index++) {
            if(items[index].id === id) {
                items.splice(index, 1);
            }
        }
        saveStorage(items);
        showItems(items);
    }
});

areaForm.addEventListener('click', function (e) {
    let event = e.target;
    if (event.classList.contains('btn-submit')){
        
        addItem();
        let showAdd = loadStorage();
        showItems(showAdd);

        inputName.value = '';
        inputLevel.value = 0;

        let isShowForm = areaForm.classList.contains('d-none');
        toggleForm(isShowForm);
        location.reload();
    }
});

// FUNCTIONS
function toggleForm(isShow){
    if (isShow) {
        areaForm.classList.remove('d-none');
        btnAddTask.classList.remove('btn-info');
        btnAddTask.classList.add('btn-danger');
        btnAddTask.textContent = 'close';
    } else {
        areaForm.classList.add('d-none');
        btnAddTask.classList.remove('btn-danger');
        btnAddTask.classList.add('btn-info');
        btnAddTask.textContent = 'Add';
    }
}

function showItemLevel(level) {
    let htmlLevel = '';
    let itemLevel = ITEMS_LEVEL.find(element => element.value == level);
    return `<span class="badge ${itemLevel.color}">${itemLevel.text}</span>`;
}

function showShortDisplay(){
    document.getElementById('sort-display').innerHTML =`${sortBy} - ${sortDir}`.toUpperCase();
}


function makeID(length = 5) {
    let result = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}
 function addItem() {
    let pushItems = loadStorage();
    if(pushItems){
        let item = {
            id: makeID(),
            name: inputName.value,
            level: inputLevel.value
        };
        pushItems.push(item);
        saveStorage(pushItems);
        return pushItems;
    }
    else{
        return [];
    }
};
function loadStorage() {
    let items = JSON.parse(localStorage.getItem('TODOS_ITEMS'));
    if (items) {
        return items;
    } else {
        return [];
    }
}

function saveStorage(items) {
    localStorage.setItem('TODOS_ITEMS', JSON.stringify(items));
}

function showItems(items) {
    let content = '';
    for (let index = 0; index < items.length; index++) {
        let level = showItemLevel(items[index].level);
        let id = items[index].id;

        content += `
        <tr>
            <td>${id}</td>
            <td>${items[index].name}</td>
            <td>${level}</td>
          
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger btn-delete" data-id = "${id}">Delete</button>
            </td>
        </tr>`;
    }
    document.getElementById('area-list-task').innerHTML = content;
}

