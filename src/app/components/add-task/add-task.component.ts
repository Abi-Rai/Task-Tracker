import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4, v4 } from 'uuid';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/uiService/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: Date;
  reminder: boolean = false;

  displayAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.displayAddTask = value));
  }

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('Please add text');
      return;
    }
    if (!this.day) {
      alert('Please add date & time');
      return;
    }
    const newTask: Task = {
      id: uuidv4().toString(),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = new Date();
    this.reminder = false;
  }
}
