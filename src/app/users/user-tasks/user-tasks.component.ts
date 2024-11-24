import {Component, inject, input} from '@angular/core';
import {

  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot
} from "@angular/router";

import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent{
  userName = input.required<string>();
  message = input.required<string>();
}
//   // 286
//   // userId = input.required<string>();
//   private usersService = inject(UsersService);
//   private activatedRoute = inject(ActivatedRoute);
//   private destroyRef = inject(DestroyRef);
//   // alternative way dynamic routing via observables
//   // userName = computed(
//   //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
//   // );
//
//   ngOnInit() {
//     console.log('Input Data: ' + this.message());
//     console.log(this.activatedRoute);
//     const subscription = this.activatedRoute.paramMap.subscribe({
//       next: (paramMap) => {
//         this.userName=
//           this.usersService.users.find ((u) => u.id === paramMap.get('userId'))
//             ?.name || '';
//       },
//     });
//     this.destroyRef.onDestroy(() => subscription.unsubscribe());
//   }
// }


// 287
export const resolveUserName: ResolveFn<string> =  (
  activatedRoute : ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
  )=> {
  const usersService = inject (UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId'))
    ?.name || '';
  return userName;
};

