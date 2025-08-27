
export default class AddTaskFormHandler {

    
    // create form elements
    inputContainer() {
        // Input container
        const container = document.createElement('form');
        container.classList.add('input-container');

        // Left container
        const leftInputContainer = document.createElement('div');
        leftInputContainer.classList.add('text-input-container');

        // text input
        const titleInput = document.createElement('input');
        titleInput.classList.add('title-input');
        titleInput.placeholder = 'Task title';
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('required', '');
        titleInput.value

        // desc input
        const descInput = document.createElement('input');
        descInput.classList.add('desc-input');
        descInput.placeholder = 'Task Details';
        descInput.setAttribute('type', 'text');

        leftInputContainer.append(titleInput, descInput);


        // Date, Priority, Tag container
        const leftBtnContainer = document.createElement('div');
        leftBtnContainer.classList.add('btns-input-container', 'left');

        const leftContainer = document.createElement('div');
        leftContainer.classList.add('task-input-container');

        // date input
        const dateInput = document.createElement('input');
        dateInput.classList.add('date-input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('min', '2025-08-27');
        console.log(new Date());
        
        // priority input 
        const prioInput = document.createElement('select');
        prioInput.classList.add('prio-input');
        
        const urgentInput = document.createElement('option');
        urgentInput.textContent = 'Urgent';
        urgentInput.value = 'urgent';

        const importantInput = document.createElement('option');
        importantInput.textContent = 'Important';
        importantInput.value = 'important';

        const optionalInput = document.createElement('option');
        optionalInput.textContent = 'Optional';
        optionalInput.value = 'optional';

        prioInput.append(urgentInput, importantInput, optionalInput);

        // Project Tag input 
        const tagInput = document.createElement('select');
        tagInput.classList.add('tag-input');
        
        const tag1 = document.createElement('option');
        tag1.textContent = 'test tag1';
        const tag2 = document.createElement('option');
        tag2.textContent = 'taggggg 2';

        tagInput.append(tag1, tag2);

        // append to tag input select using 
        function createProjectTagInput(tags, tagElement) {
            for (const tag of tags) {
                tagElement.append(tag);
            }
        }

        // grouping input container
        leftBtnContainer.append(dateInput, prioInput, tagInput);
        
        // grouping left container
        leftContainer.append(leftInputContainer, leftBtnContainer);



        // Right container
        const rightContainer = document.createElement('div');
        rightContainer.classList.add('btns-add-container');

        const rightBtnContainer = document.createElement('div');
        rightBtnContainer.classList.add('btn-input-container', 'right');
        rightContainer.append(rightBtnContainer);

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.setAttribute('id', 'cancel');
        cancelBtn.textContent = 'Cancel';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.setAttribute('type', 'button');
        addTaskBtn.setAttribute('id', 'add-task');
        addTaskBtn.textContent = 'Add Task';

        rightBtnContainer.append(cancelBtn, addTaskBtn);
        
        // Append
        container.append(leftContainer, rightContainer);
        
        return container;
    }

    getInputValue() {
        const title = document.querySelector('.title-input');
        const desc = document.querySelector('.desc-input');
        const date = document.querySelector('.date-input');
        const prio = document.querySelector('.prio-input')
        const tag = document.querySelector('.tag-input');
        console.log('lmaoooo');
    }

    submitBtn() {
        const targetAddTaskBtn = document.querySelector('.add-task-btn');
        targetAddTaskBtn.addEventListener('click', () => {
            console.log('lmo');
        })
    }



    removeTaskInput() {
        const targetContainer = document.querySelector('.input-container');
        targetContainer.remove();
    }

    addListener() {
        const targetCancelBtn = document.querySelector('.btn-input-container');
        targetCancelBtn.addEventListener('click', (e) => {
            // cancel btn
            if (e.target.id === 'cancel') this.removeTaskInput();
            if (e.target.id === 'add-task') {
                this.getInputValue();
                this.removeTaskInput();
            };
        });
    }

    renderAddTask(target) {
        const addTaskContainer = this.inputContainer();
        target.append(addTaskContainer);
        this.addListener();
    }
}


