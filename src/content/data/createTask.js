
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
        cancelBtn.textContent = 'Cancel';

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.setAttribute('type', 'submit');
        addTaskBtn.textContent = 'Add Task';

        rightBtnContainer.append(cancelBtn, addTaskBtn);
        
        // Append
        container.append(leftContainer, rightContainer);
        
        return container;
    }


    renderAddTask(target) {
        const addTaskContainer = this.inputContainer();
        target.append(addTaskContainer);
    }
}


