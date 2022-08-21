import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/uiService/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnInit {
  title: string = 'Tasks';
  displayAddTask!: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.displayAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleDisplayAddTask();
  }
  hasRoute(route:string){
    return this.router.url === route;
  }
}
