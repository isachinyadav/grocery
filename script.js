
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement ;
let editFlag = false;
let editID = "";



form.addEventListener("submit",  addItem);
clearBtn.addEventListener("click", clearItems);
const deleteBtn = document.querySelectorAll(".delete-btn");
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  const id =  new Date().getTime.toString();
  if(value && !editFlag){
      const element = document.createElement("article");
      // add class
      element.classList.add("grocery-item");
      const attr = document.createAttribute("data-id");
      attr.value = id;
      element.setAttributeNode(attr);
      element.innerHTML =`<p class="title">${value}  </p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
      <i class="fa-solid fa-check" style="font-size:36px"></i>      
  </button>
        <button type="button" class="delete-btn">
          <i class="fa fa-remove" style="font-size:48px;color:red"></i>
        </button>
      </div>`;
      const  deleteBtn = element.querySelector(".delete-btn");
      const editBtn = element.querySelector(".edit-btn");
      deleteBtn.addEventListener("click", deleteItem);
      editBtn.addEventListener("click", editItem);


      list.appendChild(element);
      displayAlert("item is added to the list ", "success");
      container.classList.add("show-container");
      addToLocalStorage(id,value);
      setBackToDefault();
  }
  else if(value && editFlag){

  }
  else{
     displayAlert("please enter the value","danger");
  }
}
// display alert 
function displayAlert(text,action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  },1000)
}
function clearItems(){
  
    const items = document.querySelectorAll(".grocery-item")
   const id = element.dataset.id;
    if(items.length>0){
      items.forEach(function(item){
        list.removeChild(item);
      })
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
}
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  if(list.children.length==0){
    container.classList.remove("show-container")
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
}
function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent ="Edit";
}
 function setBackToDefault(){
  grocery.value ="";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
 function addToLocalStorage(id, value){
    console.log("added to local storage")
 }