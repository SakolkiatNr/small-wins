export default class Task {
    constructor ( name, desc, date, priority, tag, status ) {
        this.name = name,
        this.desc = desc,
        this.priority = priority,
        this.date = date,
        this.tag = tag,
        this.status = Boolean(status)
    }

    set editTask(name, desc, priority, tag, status, date) {

    }

    
};