import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private displayAddTask:boolean=false;
  private subject = new Subject<any>();
  constructor() { }

  toggleDisplayAddTask():void{
    this.displayAddTask=!this.displayAddTask;
    this.subject.next(this.displayAddTask);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
