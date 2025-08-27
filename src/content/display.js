import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { getButtonId } from "./app/updateDisplay";
// import AddTaskFormHandler from "./data/createTask";
import { showTaskInput } from "./app/showTaskInput";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    renderSidebar(target);
    renderContent(contentTarget);
    getButtonId();
    
    // when click -> show task input container
    // const addTaskWin = new AddTaskFormHandler();
    const taskContainerTarget = document.querySelector('.tasks-container');
    // addTaskWin.renderAddTask(taskContainerTarget);


    showTaskInput(taskContainerTarget);
}