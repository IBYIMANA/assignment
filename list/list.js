// ToDo list object
let todoList = {
    tasks: [],
    categories: [],

    addTask: function(taskName, categoryName) {
        let task = { name: taskName, category: categoryName, completed: false };
        this.tasks.push(task);
        if (!this.categories.includes(categoryName)) {
            this.categories.push(categoryName);
        }
    },
    displayTasksByCategory: function() {
        this.categories.forEach(category => {
            console.log(`Category: ${category}`);
            this.tasks.forEach(task => {
                if (task.category === category) {
                    console.log(`${task.name} - ${task.completed ? 'Completed' : 'Pending'}`);
                }
            });
        });
    },
    markTaskCompleted: function(taskName) {
        this.tasks.forEach(task => {
            if (task.name === taskName) {
                task.completed = true;
            }
        });
    },
    removeTask: function(taskName) {
        this.tasks = this.tasks.filter(task => task.name !== taskName);
    }
};
todoList.addTask('Complete assignment', 'Study');
todoList.addTask('Buy groceries', 'Shopping');
todoList.addTask('Go for a run', 'Fitness');

console.log("Tasks grouped by categories:");
todoList.displayTasksByCategory();

console.log("\nMarking 'Complete assignment' as completed:");
todoList.markTaskCompleted('Complete assignment');
todoList.displayTasksByCategory();

console.log("\nRemoving 'Go for a run' task:");
todoList.removeTask('Go for a run');
todoList.displayTasksByCategory();
