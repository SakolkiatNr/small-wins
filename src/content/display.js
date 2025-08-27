import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { updateHeaderName } from "./app/updateDisplay";
import { activeAddTaskButton } from "./app/showTaskInput";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    // Render
    renderSidebar(target);
    renderContent(contentTarget);
    updateHeaderName();
    
    activeAddTaskButton();
}