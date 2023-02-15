// lets get the button and the input field and parent OL list so child can be added
var button = document.getElementById('addTodoBtn');
var input = document.getElementById('newTodoInput');
var parentList = document.getElementById('todoList');

function appendToList(){
	if(input.value){
	var todo = document.createElement('li');
	todo.textContent = input.value;
	parentList.appendChild(todo);
	input.textContent = "";
	}
	
}
// add event listener to button
button.addEventListener('click', appendToList)

// if the button is clicked, append child to parent



