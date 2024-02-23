//loads all of the DOM content into JS before allowing any JS interaction to prevent uncaught reference errors
addEventListener('DOMContentLoaded', function e () {
    //sets variables for the button on the page and the whole task list
    let newTaskButton = document.querySelector('button');
    let list = document.querySelector('ul');

    //function that adds new tasks to tasklist
    newTaskButton.addEventListener('click', function addNewTask(event) {
        //prevents button from refreshing page
        event.preventDefault();
        //sets a variable for the input box value
        let newTaskInput = document.getElementById('addTaskInput').value;
        //creating elements
        const li = document.createElement('li');
        const textInput = document.createElement('span');
        const deleteButton = document.createElement('span');
        //make list element child of full task list
        list.appendChild(li);
        //make spans children of the list item appended up top
        li.appendChild(textInput);
        li.appendChild(deleteButton);
        //give spans classes so they adhere to html and css rules
        textInput.className = 'task';
        deleteButton.className = 'delete';
        //changes the text content of the appended children
        textInput.textContent = newTaskInput;
        deleteButton.textContent = 'Delete';
    })

    // //function that adds delete function to delete buttons. p.s. this is copied exactly from netninja js dom tutorial 10. for some reason, intellisense didnt recommend
    // e.target.className so i spent a whole hour and a half in total on this. wouldve been nice to have the suggestion but i used the code verbatim and it worked. i think
    // this means i need to understand every propery method and everything of js dom manipulation but im sure ill figure this all out in due time. wonder if there's specific
    // resources online for this
    list.addEventListener('click', function(e){
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    })
});