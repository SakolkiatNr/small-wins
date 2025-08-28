export function activeRemoveBtns() {
    const container = document.querySelector('.tasks-container');
    const removeBtn = document.querySelector('.remove-task');

    container.addEventListener('click', (e) => {
        console.log(e.target.closest('.task-container'));
    })
}