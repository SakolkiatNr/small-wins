export default class Task {
    constructor ( taskTitle, desc, date, priority, tag) {
        this.name = taskTitle,
        this.desc = desc,
        this.priority = priority,
        this.date = date,
        this.tag = tag,
        this.status = false,
        this.id = crypto.randomUUID();
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

    set toggleStatus(newStatus) {
        this.status = newStatus;
    }
    
};