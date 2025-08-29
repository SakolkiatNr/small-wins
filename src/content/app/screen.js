import { tasksArr } from "../data/taskData";
import { taskCard } from "./taskCard";
import { format } from "date-fns";

export default class Screen {
    #tasksContainer = document.querySelector('.tasks-container');
    #tasks = tasksArr;

    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }

    renderDefault() {
        this.clearScreen();
        for (const task in this.#tasks) {
            const taskObj = this.#tasks[task];
            tasksContainer.append(taskCard(taskObj));
        }

        const test = document.createElement('h1');
        test.textContent = 'INBOXXXX';
        this.#tasksContainer.append(test);
    }

    filterToday() {
        this.clearScreen();
        // for (const task in this.#tasks) {
        //     const taskObj = this.#tasks[task];
        //     const todayDate = format(new Date(), 'yyyy-MM-dd');
            
        //     if (todayDate === taskObj.date) {
        //         this.#tasksContainer.append(taskCard(taskObj));
        //     }  
        // }

        const test = document.createElement('h1');
        test.textContent = 'TODAYYYY';
        this.#tasksContainer.append(test);
    }

    filterWeek() {
        for (const task in this.#tasks) {
            const taskObj = this.#tasks[task];
            
            const today = new Date();
            const thisWeek = today.setDate(today.getDate() + 7);

            if (taskObj.date <= thisWeek ) {
                this.#tasksContainer.append(taskCard(taskObj));
            }
        }
    }

    filterCompleted() {
        // Task.status === true;
    }

    filterProject(projectTag) {
        // for (tag in tags) 
        // append matching tag

    }

}


/*
click Nav (export to upDateDisplay.js)

get nav Id

if nav id === today
    Screen.filterDay
if nav id === week
    Screen.filterWeek
if nav id === completed
    Screen. Show tasks that Task.status === true


if project.id
    matching tag
    render matching tag in Tasks


*/