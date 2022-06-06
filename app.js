/**
 * TODO app
 * Create, remove and mark done todo items
 */

(function(){
    `use strict`;
    /**
     * Represents the Todo Object
     *  @constructor 
     */
    function Todo () {

        var input = document.querySelector("input"),
            addBtn = document.querySelector(".addButton"),
            todoList = document.getElementsByClassName("todoList")[0],
            allBtn = document.querySelector(".allBtn"),
            activeBtn = document.querySelector(".activeBtn"),
            completeBtn = document.querySelector(".completeBtn");

        /**
         * @function addItem
         * @param {object} event - element add Btn
        */
        function addItems(event) {
            var task = input.value;
            var item = createItem(task);

            input.value = "";
            todoList.appendChild(item);
        }
        
        /**
         * @function createItem
         * @param {string} task - value of input element 
         * @return {object} - element li
        */
        function createItem(task) {
                
            var item = document.createElement("li");
             
            item.innerHTML = task;

            addRemoveBtn(item);
            addCheckbox(item);

            return item;   
        }

        /**
         * @function addRemoveBtn
         * @function addCheckbox
         * @param {object} item - element li
        */
        function addRemoveBtn(item){
            var removeButton = document.createElement("i");

            removeButton.classList.add("fa-solid", "fa-xmark", "removeButton");
            removeButton.addEventListener("click", removeItem);
            item.appendChild(removeButton);
        }

        function addCheckbox(item){
            var checkButton = document.createElement("input");
            checkButton.className = "checkButton";
            checkButton.type = "checkbox";
            checkButton.addEventListener("click", checkItem);
            item.insertBefore(checkButton, item.firstChild);
        }
        
        /**
         * @function removeItem
         * @param {object} event - element remove Btn
        */
        function removeItem(event){
            item = event.target;
            item.parentNode.remove();
        }
        
        /**
         * @function checkItem
         * @param {object} event - element check Btn
        */
        function checkItem(event){
            var item = event.target;
            item.parentNode.classList.toggle("done");
        }

        function completedItems(){
            var notDone = document.querySelectorAll("li:not(.done");
            var done = document.querySelectorAll(".done");
            notDone.forEach(function(node){
               node.classList.toggle("hidden"); 
            });
            done.forEach(function(node){
                node.classList.remove("hidden"); 
             });
        }

        function allItems(){
            var all = document.querySelectorAll("li");
            all.forEach(function(node){
                node.classList.remove("hidden"); 
             });
        }

        function activeItems(){
            var done = document.querySelectorAll(".done");
            var notDone = document.querySelectorAll("li:not(.done");
            done.forEach(function(node){
                node.classList.toggle("hidden");
            });
            notDone.forEach(function(node){
                node.classList.remove("hidden"); 
             });
        }

        this.addlistiners = function(){
            addBtn.addEventListener("click",addItems);
            completeBtn.addEventListener("click", completedItems);
            allBtn.addEventListener("click", allItems);
            activeBtn.addEventListener("click", activeItems);
        };
     }
    
    Todo.prototype.init = function() {
        this.addlistiners();
    };
    var todo = new Todo();
    window.addEventListener('load', todo.init());
})();







