export default class Task {
    constructor ( name, desc, date, priority, tag, status ) {
        this.name = name,
        this.desc = desc,
        this.priority = priority,
        this.date = date,
        this.tag = tag,
        this.status = Boolean(status)
    }

    // Edit details
    set changeName(newName) {
        this.name = newName;
    }

    set changeDesc(newDesc) {
        this.desc = newDesc;
    }

    set changePrio(newPrio) {
        this.priority = newPrio;
    }

    set changeDate(newDate) {
        this.date = newDate;
    }

    set changeTag(newTag) {
        this.tag = newTag;
    }
    
};