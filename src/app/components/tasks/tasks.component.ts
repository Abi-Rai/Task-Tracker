import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/taskService/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    this.taskService
      .getTasks()
      .subscribe((tasksFromService) => (this.tasks = tasksFromService));
  }

  ngOnInit(): void {}
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id != task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(newTask: Task) {
    this.taskService
      .addNewTask(newTask)
      .subscribe((responseTask) => this.tasks.push(responseTask));
  }
}
