// import { activeAddTaskButton } from "./app/showTaskInput";
import { activeRemoveBtns } from "./removeTask";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";

export function activeTaskEventHandler() {
    updateContentScreen();
    activeAddTaskButton();
    activeRemoveBtns();
}