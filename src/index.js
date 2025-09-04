import "./styles.css";
import renderScreen from "./content/display";

// user data 
import { ProjectData } from "./content/data/projectData";
import TasksData from "./content/data/tasks";

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
    return tasksData;
}


document.addEventListener('click', (e)=> {
    if (e.target.id === 'confirm-new-pj' || 
        e.target.id === 'delete-pj-btn'
    ) {
        saveUserProjectData();
    }

    if (e.target.id === 'add-task') {
        saveUserTaskData();
    }

    if (e.target.id === 'edit-task-btn') {

    } 

    if (e.target.id === 'remove-task-btn') {

    }

});




renderScreen();
