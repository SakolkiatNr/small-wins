import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { getButtonId } from "./app/updateDisplay";
import AddTaskFormHandler from "./data/createTask";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    const addTaskWin = new AddTaskFormHandler();
    
    renderSidebar(target);
    renderContent(contentTarget);
    getButtonId();

    const taskContainerTarget = document.querySelector('.tasks-container');
    addTaskWin.renderAddTask(taskContainerTarget);
}