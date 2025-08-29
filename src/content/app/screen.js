import { tasksArr } from "../data/taskData";
import { taskCard } from "./taskCard";
import { format } from "date-fns";

class Screen {
    #tasksContainer = document.querySelector('.tasks-container');
    #task = tasksArr;

    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }

    currentScreen(pageId) {
        this.clearScreen();
        if (pageId) return 'render this page';

    }
}



export function renderTasks() {
    // Tasks data
    const tasks = tasksArr;
    const tasksContainer = document.querySelector('.tasks-container');

    // render task
    for (const task in tasks) {
        const taskObj = tasks[task];
        tasksContainer.append(taskCard(taskObj));
    }
}

// if id === 'today' run this function
function filterToday(tasksArr, targetContainer) {
    for (const task in tasksArr) {
        // yyyy-mm-dd
        const taskDate = tasksArr[task].date;
        const today = format(new Date(), 'yyyy-MM-dd');

        if (taskDate === today) {
            targetContainer.append(taskCard(taskDate[task]));
        }
    }
}

function filterWeek(tasksArr, targetContainer) {

}


// const inboxPage = new Screen();
// inboxPage.currentScreen(id);
// const todayPage = new Screen();
// const weekPage = new Screen();

// const project1 = new Screen();
// const project2 = new Screen();