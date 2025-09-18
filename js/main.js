//creamos las constantes globales para los elementos princiupales, son globales por que no estan dentro de una funcion
const input = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const completedList = document.getElementById("cont-completed-list");

//creamos la funcion que nos permite crear una nueva tarea  apartidr del formulario
//toda etiqueta que vamos a crear es a partir de la maqueta HTML pre existente
//esta funcion solo crea la estructura html y la deja en un "limbo" para luego ser agregada  mediante un appenchild
function createToDoItem(textoItem) {

    //creamos el nodo o elemento padre o contenedor
    const item = document.createElement("div");
    item.classList.add("item-to-do");

    //creamos el nodo hijo del inpout y le agregamos el type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // checkbox.type = "checkbox"; este es resumido ya le asigna directamente el atributo al type

    //creamos el siguiente nodo hijo - parrafo
    const p = document.createElement("p");
    //a este parrafo le asigno el valor del argumento de la funcion, es decir lo que escribe el usuario en el campo
    p.textContent = textoItem;

    //creamos el ultimo nodo hijo, el boton de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";



    //-------------------------------------------------------------------------------------------------------------------------
    //agregamos mediante appen childEnsamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //utilizamos el return para dar respuesta del elemento creado ya que lo usaremos en otra funcion mas adelante
    return item;
}



//detectamos el click o el evento click sobre el boton agregar con un evento de escuccha o listener
//para que a partir de este evento se agregue la tarea dentro del contenedor cont-to-do-list
addBtn.addEventListener('click', () => {
    const textoItem = input.value.trim();//se guarda lo que el usuario ingresa
    if (textoItem == "") {
        alert("no se puede crear una tarea vacia");

    } else {
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        eventsToItem(newItem);
        input.value = "";
    }
});


//la siguiente funcion nos permitira agregar el funcionamiento principal sobre las tareas es decir marcar la tarea como realizad o completada o en dado caso eliminarla (ageragr-eliminar)
function eventsToItem(item) {
    //utlizamos quiery selector para capturar el input y el button que estan dentro del item
    const checkbox = item.querySelector("input");
    const deleteBtn = item.querySelector("button");

    //marcar como completada la tarea en el checkbox
    checkbox.addEventListener('change', () => {

        if (checkbox.checked) {
            completedList.appendChild(item);
        }
        else {
            toDoList.appendChild(item);
        }

    });

    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}


const bntStyles = document.getElementById("change-styles");

bntStyles.addEventListener('click', () => {
    const linkCss = document.getElementById("enlace-estilos");

    if (linkCss.getAttribute('href') === 'css/style.css') {
        
        linkCss.setAttribute("href", 'css/style-dia.css');
        bntStyles.textContent = "Modo Noche";
    }
    else {
        linkCss.setAttribute("href", "css/style.css");
        bntStyles.textContent = "Modo dia";
    }


});