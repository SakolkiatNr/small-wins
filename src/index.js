import "./styles.css";
import { logo } from "./content/sidebar";
import { sideBarBtns } from "./content/sidebar";

const target = document.querySelector('.sidebar');
target.append(logo);
target.append(sideBarBtns);