import {Component, computed, inject, input} from '@angular/core';

import { TaskComponent } from './task/task.component';
import {TasksService} from "./tasks.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>();
  order = input<'asc'|'desc'>();
  // 283 automatic input binding
  private tasksService = inject(TasksService);
  // 276
  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())

  );
// 275
}
