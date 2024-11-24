import {Routes} from "@angular/router";
import {routes as userRoutes} from './users/users.routes';
// 280
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },

  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
  //   280
  },
  {
    path: '**',
    component: NotFoundComponent,
  },


];

