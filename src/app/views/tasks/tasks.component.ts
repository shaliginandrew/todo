import {Component, OnInit} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private DataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.DataHandler.taskSubject.subscribe(tasks => this.tasks = tasks)
  }

}
