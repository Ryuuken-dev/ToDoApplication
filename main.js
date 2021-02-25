const itemsField = document.querySelector('.dataContent__itemList');
const dataField = document.querySelector('.mainContent__inData');
const clearButton = document.querySelector('.mainContent__removeAll');
const searchField = document.querySelector('.mainContent__searchField');
const dataHeader = document.querySelector('.dataContent__header');
const dataSpan = document.querySelector('.dataContent__header span');
const liElement = document.getElementsByClassName('task');

let values = [];

const reset = ()=> {
    values.forEach((value, index)=> {
        value.dataset.key=index;
        itemsField.appendChild(value);
    });
}

const removeTask = (e)=> {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    values.splice(index, 1);
    reset();
}

const createElement = (dataSource)=> {
        const newLi = document.createElement('li');
        newLi.innerHTML = dataSource + "<button>Usuń</button>";
        newLi.className = "task";
        itemsField.appendChild(newLi);
        dataSpan.textContent = liElement.length;
    }
        
    
const addTask = function() {
    const userData = dataField.value.toLowerCase();
    if(userData) {
        const newLi = document.createElement('li');
        newLi.innerHTML = userData + "<button>Usuń</button>";
        newLi.className = "task";
        values.push(newLi);
        itemsField.textContent = "";
        reset();
        dataSpan.textContent = liElement.length;
        dataField.value = "";
        newLi.querySelector('button').addEventListener('click', removeTask);    //Szukamy w elemencie li buttona
    } else {
        alert('Wprowadź wartość!');
    }
    
}

document.querySelector('.mainContent__addTask').addEventListener('click', addTask);

const search = (e)=> {
    const userText = e.target.value.toLowerCase();
     const textValues = values.map(li=>li.childNodes[0].nodeValue);
     const searchValues = textValues.filter(value=>value.includes(userText));
     itemsField.textContent = "";
     if(searchField !== "") {
         searchValues.forEach(value=> {
         createElement(value);
     })
     } else {
         createElement(textValues);
         searchValues.length = 0;
     }
    
     dataSpan.textContent = liElement.length;
    
}

document.querySelector('.mainContent__searchField').addEventListener('input', search);

const deleteAll = ()=> {
    itemsField.textContent="";
    dataSpan.textContent = liElement.length;
    values.length = 0;
}

document.querySelector('.mainContent__removeAll').addEventListener('click', deleteAll);




//Dodawanie atrybutu id do elementu:
//newLi.id = "value"

//Dodawanie atrybutu data do elementu:
//newLi.dataset.key = 1;   //Otrzymamy data-key="1" w HTML

//Pobranie indeksu elementu podczas wykonywania metody forEach:
//array.forEach((element, index)=> {})  //Pobieramy każdorazowo element wraz z jego indeksem

//Sprawdzenie jaką wartość data-key posiada element
//const index = e.target.parentNode.dataset.key     Sprawdzamy jaką wartość data-key posiada rodzic i przypisujemy ją do zmiennej



/*filteredValues = values;

    filteredValues.filter( item => item.taskName.toLowerCase().includes(userText))

    renderView(filteredValues);*/

    // console.log(searchTemp);

/*let filteredValues = [];

const addNewTask = () => {
    valuesLength = values.length;
    taskName = dataField.value;
    singleTask = {
        id: valuesLength + 1,
        taskName: taskName
    }
    values.push(singleTask);
    console.log(values);
    renderView();
}

const removeTask2 = (id) => {
    const newValues = [];
    values.map((task) => {
        if(task.id != id) {
            newValues.push(task)
        }
    });
    values = newValues
    renderView();
}

const renderView = (filtered) => {
    if(filtered !== undefined) {
        console.log(filtered);
    }*/

    
    // if(filtered.length > 0) {
    //     itemsField.innerText = "";
    //     filtered.map((task) => {
    //         const newLi = document.createElement('li');
    //         const buttonRemove = document.createElement('button');
    //         buttonRemove.textContent = "Usuń";
    //         newLi.className = "task"
    //         newLi.id = task.id;
    //         newLi.innerText = task.taskName;
    //         newLi.appendChild(buttonRemove);
    //         itemsField.appendChild(newLi);
    //         buttonRemove.addEventListener('click', () => removeTask2(task.id));
    //     }) 
    // }

    /*itemsField.innerText = "";
    values.map((task) => {
        const newLi = document.createElement('li');
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = "Usuń";
        newLi.className = "task"
        newLi.id = task.id;
        newLi.innerText = task.taskName;
        newLi.appendChild(buttonRemove);
        itemsField.appendChild(newLi);
        buttonRemove.addEventListener('click', () => removeTask2(task.id));
    })
}*/