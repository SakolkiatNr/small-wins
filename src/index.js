import "./styles.css";
import renderScreen from "./content/display";

// user data 
import { ProjectData } from "./content/data/projectData";
import TasksData from "./content/data/tasks";

const pjData = new ProjectData()
const tasks = new TasksData();

if (!localStorage.getItem('projects') || !localStorage.getItem('tasks')) {
    saveUserProjectData();
    saveUserTaskData();

} else {
    // get data from storage
    console.log(`local project: ${localStorage.getItem('projects')}`);
    console.log(`local tasks: ${localStorage.getItem('tasks')}`);

}

// if add/remove project event
    // set project array to local storage 
function saveUserProjectData() {
    localStorage.setItem('projects', JSON.stringify(pjData));
}
// if add/remove tasks event
// set task array to local storage
function saveUserTaskData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
    
function getUserData() {
    const storedProjectsData = localStorage.getItem('projects');
    const storedTasksData    = localStorage.getItem('tasks');

    const projectsData = JSON.parse(storedProjectsData);
    const tasksData    = JSON.parse(storedTasksData);
}






renderScreen();
