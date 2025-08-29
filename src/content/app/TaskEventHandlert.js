// import { activeAddTaskButton } from "./app/showTaskInput";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";

export function activeTaskEventHandler() {
    updateContentScreen();
    activeAddTaskButton();
}