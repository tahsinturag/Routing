import {Component, computed, DestroyRef, inject, input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName = '';
  // userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  // alternative way dynamic routing via observables
  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName=
          this.usersService.users.find ((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

// 272
//new 5-270
//input import korte hbe


