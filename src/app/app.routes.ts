import {Routes} from "@angular/router";
import {routes as userRoutes} from './users/users.routes';
// 280
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
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
    data: {
      message: 'Hello!'
    },
  //  1--------- 286
    resolve: {
    userName: resolveUserName
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
  },


];

