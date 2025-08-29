import { tasksArr } from "../data/taskData";
import { taskCard } from "./taskCard";
import { format } from "date-fns";

class Screen {
    #tasksContainer = document.querySelector('.tasks-container');
    #tasks = tasksArr;

    clearScreen() {
        const container = document.querySelector('.tasks-container');
        container.innerHTML = '';
    }

    renderDefault() {
        for (const task in this.#tasks) {
            const taskObj = this.#tasks[task];
            tasksContainer.append(taskCard(taskObj));
        }
    }

    filterToday() {
        for (const task in this.#tasks) {
            const taskObj = this.#tasks[task];
            const todayDate = format(new Date(), 'yyyy-MM-dd');
            
            if (todayDate === taskObj.date) {
                this.#tasksContainer.append(taskCard(taskObj));
            }  
        }
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