import TasksData from "../data/tasks";
import { taskCard } from "./taskCard";
import { format } from "date-fns";
// import { taskCard } from "./taskCard";

export default class Screen {

    constructor (tasksData) {
        this.data = tasksData;
    }
    
    #tasksContainer = document.querySelector('.tasks-container');

    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }

    renderDefault() {
        this.clearScreen();
        // for (const task in tasksArray) {
        //     const taskObj = tasksArray[task];
        //     console.log(taskObj);
        //     this.#tasksContainer.append(taskCard(taskObj));
        // }

        // TEST
        const test = document.createElement('h1');
        test.textContent = 'INBOXXX';
        this.#tasksContainer.append(test); 
    }

    filterToday() {
        this.clearScreen();
        // for (const task in tasksArray) {
        //     const taskObj = tasksArray[task];
        //     const todayDate = format(new Date(), 'yyyy-MM-dd');
            
        //     if (todayDate === taskObj.date) {
        //         this.#tasksContainer.append(taskCard(taskObj));
        //     }  
        // }

        // TEST
        const test = document.createElement('h1');
        test.textContent = 'TODAYYYY';
        this.#tasksContainer.append(test);
    }

    filterWeek() {
        this.clearScreen();
        // for (const task in this.#tasks) {
        //     const taskObj = this.#tasks[task];
            
        //     const today = new Date();
        //     const thisWeek = today.setDate(today.getDate() + 7);

        //     if (taskObj.date <= thisWeek ) {
        //         this.#tasksContainer.append(taskCard(taskObj));
        //     }
        // }

        const test = document.createElement('h1');
        test.textContent = 'THIS WEEK'
        this.#tasksContainer.append(test);
    }

    filterCompleted() {
        // Task.status === true;
    }

    filterProject(projectTag) {
        // for (tag in tags) 
        // append matching tag

    }
}
