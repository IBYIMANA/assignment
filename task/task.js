// Task Scheduler object
let taskScheduler = {
    tasks: [],

    // Function to add task with due date
    addTask: function(title, description, dueDate) {
        let task = { title: title, description: description, dueDate: dueDate, completed: false };
        this.tasks.push(task);
    },

    // Function to display tasks sorted by due date
    displayTasksSortedByDueDate: function() {
        let sortedTasks = this.tasks.slice().sort((a, b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });

        console.log("Tasks sorted by due date:");
        sortedTasks.forEach(task => {
            console.log(`Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Completed: ${task.completed}`);
        });
    },

    // Function to update task details or mark tasks as completed
    updateTask: function(title, newTitle, newDescription, newDueDate, markCompleted) {
        this.tasks.forEach(task => {
            if (task.title === title) {
                task.title = newTitle || task.title;
                task.description = newDescription || task.description;
                task.dueDate = newDueDate || task.dueDate;
                task.completed = markCompleted !== undefined ? markCompleted : task.completed;
            }
        });
    },

    // Function to remove task from scheduler
    removeTask: function(title) {
        this.tasks = this.tasks.filter(task => task.title !== title);
    }
};

// Test the task scheduler
taskScheduler.addTask("Study JavaScript", "Complete JavaScript tutorial", "2024-03-15");
taskScheduler.addTask("Exercise", "Go for a run", "2024-03-12");
taskScheduler.addTask("Meeting", "Meeting with clients", "2024-03-10");

console.log("Tasks in the scheduler:");
taskScheduler.displayTasksSortedByDueDate();

console.log("\nUpdating task 'Study JavaScript':");
taskScheduler.updateTask("Study JavaScript", "Study JavaScript and React", undefined, "2024-03-20", true);
taskScheduler.displayTasksSortedByDueDate();

console.log("\nRemoving task 'Exercise':");
taskScheduler.removeTask("Exercise");
taskScheduler.displayTasksSortedByDueDate();
