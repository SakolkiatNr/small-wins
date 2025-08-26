import renderSidebar from "./sidebar";
import { renderContent } from "./content";
import { getButtonId } from "./app/updateDisplay";

export default function renderScreen() {
    const target = document.querySelector('.sidebar');
    const contentTarget = document.querySelector('.content');
    
    renderSidebar(target);
    renderContent(contentTarget);
    getButtonId();
}