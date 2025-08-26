import "./styles.css";
import renderSidebar from "./content/sidebar";
import { renderContent } from "./content/content";

const target = document.querySelector('.sidebar');
const contentTarget = document.querySelector('.content');

renderSidebar(target);
renderContent(contentTarget);