// import { activeAddTaskButton } from "./app/showTaskInput";
import { activeAddTaskButton } from "./showTaskInput";
import { updateContentScreen } from "./updateDisplay";

import TasksData from "../data/tasks";
import Screen from "./screen";

export function activeTaskEventHandler() {
    const tasks = new TasksData();
    const newScreen = new Screen(tasks);

    updateContentScreen(newScreen);
    activeAddTaskButton();
}