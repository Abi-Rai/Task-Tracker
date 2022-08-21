import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onAddTask() {
    this.btnClick.emit();
  }
}
