// import { activeAddTaskButton } from "./app/showTaskInput";
import { activeRemoveBtns } from "./removeTask";
import {activeAddTaskButton} from "./showTaskInput";
import { updateHeaderName } from "./updateDisplay";

export function activeTaskEventHandler() {
    updateHeaderName();
    activeAddTaskButton();
    activeRemoveBtns();
}