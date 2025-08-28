import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { activeTaskEventHandler } from "./app/TaskEventHandlert";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    
    // active event listener
    activeTaskEventHandler();
}