const allarm = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';
//***********EVENT LISTENERS  ***********/

//submit form
form.addEventListener('submit', addItem);

// clear items
clearBtn.addEventListener('click', clearItems);


// **********FUNCTIONS*************+
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    // on a serious project you wouldnt use the new date approach, we're just using it to great some sort of id for an element
    const id = new Date().getTime().toString();
    if(value && !editFlag) {
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML= `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`;
        //append child
        list.appendChild(element);
        //display alert
        displayAlert('item added to the list', 'success');
        //show container
        container.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();
    } else if(value && editFlag) {
    } else {
        displayAlert('please enter value', 'danger');
    }

}

// display alert
function displayAlert(text, action) {
    allarm.textContent= text;
    allarm.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function(){
        allarm.textContent= '';
        allarm.classList.remove(`alert-${action}`);
    },1000)
}

//delete item
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');

    if (items.length>0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('list emptied', 'danger');
    setBackToDefault();
    // localStorage.removeItem('list');
}

//set to defualt

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

//***************LOCAL STORAGE ***********/
function addToLocalStorage(id, value) {}