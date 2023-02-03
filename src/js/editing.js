const Tasks = require('./tasks.js');

class Todolist {
  constructor() {
    this.taskData = [];
  }

    addtask = (description, completed, index) => {
      const newtask = new Tasks(description, completed, index);
      this.taskData.push(newtask);
      index = this.taskData.length + 1;
      if (typeof window !== 'undefined') {
        localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
      }
      return this.taskData;
    };

    updateTask(item, description) {
      if (this.taskData[item]) {
        this.taskData[item].description = description;
      }
      this.taskData.forEach((elem, index) => {
        elem.index = index;
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
        this.displayTask();
      }
      return this.taskData[item].description;
    }
}
module.exports = Todolist;