import TasksData from "../data/tasks";
import Screen from "./screen";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";


export function activeTaskEventHandler() {
    const tasks = new TasksData();
    const newScreen = new Screen(tasks.data);

    updateContentScreen(newScreen);
    activeAddTaskButton(tasks);
}