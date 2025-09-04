import "./styles.css";
import renderScreen from "./content/display";

// user data 
import { ProjectData } from "./content/data/projectData";
import TasksData from "./content/data/tasks";
import ProjectButtonsHandler from "./content/app/projectBtnHandler";
import Task from "./content/data/taskData";

const pjData = new ProjectData()
const tasks = new TasksData();

if (!localStorage.getItem('projects') || !localStorage.getItem('tasks')) {
    // If there is no project or task data in user local storage
    
    // Create new user data [array]
    saveUserProjectData();
    saveUserTaskData();
} else {
    // get data from storage [array]
    pjData.projects = getUserProjectData();
    tasks.data = getUserTasksData();

}

// if add/remove project event
    // set project array to local storage 
// if add/remove tasks event
    // set task array to local storage

function saveUserProjectData() {
    localStorage.setItem('projects', JSON.stringify(pjData.projects));
}
function saveUserTaskData() {
    localStorage.setItem('tasks', JSON.stringify(tasks.data));
}
    
function getUserProjectData() {
    const storedProjectsData = localStorage.getItem('projects');
    const projectsData = JSON.parse(storedProjectsData);
    // return array
    return projectsData;
}

function getUserTasksData() {
    const storedTasksData    = localStorage.getItem('tasks');
    const tasksData    = JSON.parse(storedTasksData);
    // return array

    return tasksData.map(obj => {
        const task = new Task(obj.name, obj.desc, obj.date, obj.priority, obj.tag);
        task.status = obj.status;
        task.id = obj.id;
        return task;
    });
}

document.addEventListener('click', (e)=> {
    // when add, edit, remove task -> update data
    if (e.target.id === 'add-task' ||
        e.target.closest('.edit-task') ||
        e.target.closest('.remove-task') ||
        e.target.closest('.confirm-btn')
    ) {
        saveUserTaskData();
    }
});

renderScreen(pjData, tasks);


const pjBtnHandler = new ProjectButtonsHandler(pjData);
// project input button listener
document.addEventListener('click', (event) => {
    pjBtnHandler.projectBtn(event);
    saveUserProjectData();
})