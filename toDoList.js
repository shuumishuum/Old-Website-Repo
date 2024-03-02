//loads all of the DOM content into JS before allowing any JS interaction to prevent uncaught reference errors
addEventListener('DOMContentLoaded', function e () {
    //sets variables for the button on the page and the whole task list
    let newTaskButton = document.querySelector('button');
    let list = document.querySelector('ul');
    let darkMode = document.getElementById('darkMode');
    let hideWhiteArea = document.getElementById('hideWhiteArea');

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
        const editButton = document.createElement('img');
        //make list element child of full task list
        list.appendChild(li);
        //make spans children of the list item appended up top
        li.appendChild(textInput);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        //give spans classes so they adhere to html and css rules
        textInput.className = 'task';
        deleteButton.className = 'delete';
        editButton.className = 'svg';
        //changes the text content of the appended children
        textInput.textContent = newTaskInput;
        deleteButton.textContent = 'Delete';
        //changes added image to be svg
        editButton.setAttribute('src', 'editButton.svg');
        //changes svg width and height
        editButton.setAttribute('width', '20');
        editButton.setAttribute('height', '20');
        //It's as simple as this line of code to reset the add task input box. for some odd reason, you can't just use the already defined variable 😠
        document.getElementById('addTaskInput').value = '';
    })

    /* function that adds delete function to delete buttons. p.s. this is copied exactly from netninja js dom tutorial 10. for some reason, intellisense didnt recommend
    e.target.className so i spent a whole hour and a half in total on this. wouldve been nice to have the suggestion but i used the code verbatim and it worked. i think
    this means i need to understand every propery method and everything of js dom manipulation but im sure ill figure this all out in due time. wonder if there's specific
    resources online for this */
    list.addEventListener('click', function(e){
        if (e.target.className == 'delete') {
            //creating whole list element to target in relation to clicked element
            const li = e.target.parentElement;
            //removing list item from whole list
            list.removeChild(li);
        }
    })

    /*function that allows previous tasks to be editable*/
    list.addEventListener('click', function(e){
        if (e.target.className == 'svg') {
            //creating elements to target in relation to svg element
            const list = e.target.parentElement;
            const task = list.querySelector('span');
            //adding contenteditable attribute to task element
            task.setAttribute('contenteditable', 'plaintext-only')
        }
    })

    /*function that makes page dark mode*/
    darkMode.addEventListener('click', function(event) {
        //prevent button from refreshing page
        event.preventDefault();
        //creating body element for document
        const body = document.querySelector('body');
        const border = document.getElementsByClassName('border');
        const footer = document.querySelector('footer');
        const images = document.getElementsByClassName('svg');
        const buttons = document.querySelectorAll('button');
        const spans = document.querySelectorAll('span');
        //style body color and background color
        body.style.color = 'grey';
        body.style.backgroundColor = 'black';
        footer.style.backgroundColor = 'black';
        footer.style.borderColor = 'grey';


        Array.from(border).forEach(function(item){
            item.style.borderColor = 'grey';
        })

        Array.from(images).forEach(function (image) {
            image.style.color = 'grey';
        })

        Array.from(buttons).forEach(function (button) {
            button.style.color = 'black';
            button.style.backgroundColor = 'grey';
        })

        Array.from(spans).forEach(function (span) {
            span.style.color = 'black';
            span.style.backgroundColor = 'grey';
            span.style.borderColor = 'grey';
        })
    })

    /*function that lets you hide the text area and current goal*/
    hideWhiteArea.addEventListener('click', function(e){
        e.preventDefault();

        const todaysGoal = document.querySelector('form');
        const textArea = document.querySelector('textarea');

        todaysGoal.style.display = 'none';
        textArea.style.display = 'none';
    })

    // list.addEventListener('click', function(e){
    //     if(e.target.getElementById = 'li') {
    //         let tasks = document.getElementsByClassName('task');
    //         Array.from(tasks).forEach(function(span) {
    //             span.setAttribute('contenteditable', 'false')
    //         })
    //     }})

    //displays checkboxes on side of delete button
    // let checkBoxes = document.getElementById('checkBoxes');

    // checkBoxes.addEventListener('click', function showCheckBoxes(event){
    //     let allCheckBoxes = document.getElementsByClassName('checkBox');
    //     Array.from(allCheckBoxes).forEach(box, {
    //         box.style.display = 'initial'
    //     })
    // })

    // document.querySelector('checkBox').style.display = 'inital';
});