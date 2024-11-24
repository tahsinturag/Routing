import {Routes} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  // {
  //   path: 'tasks',
  //   component: TasksComponent,
  // },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks',
        component: TasksComponent
      },

      {
        // 273
        path: 'tasks/new',
        component: NewTaskComponent
      }
    ]

  }
];
//2
// new 2--269
