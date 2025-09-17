//creamos las constantes globales para los elementos princiupales son globales por que no estan dentro de una funcion
const input = document.getElemtById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const completedList = document.getElementById("cont-completed-list");

//creamos la funcion que nos permite crear una nueva tarea  apartidr del formulario
//toda etiqueta que vamo a crear es a partir de la maqueta HTML pre existente
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
    //Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //utilizamos el return para dar respuesta del elemento creado ya que lo usaremos en otra funcion mas adelante
    return item;
}