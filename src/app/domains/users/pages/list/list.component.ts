import { Component, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@/shared/services/user.service';
import { User } from '@/shared/models/users.model';
import { UserComponent } from '@/users/components/user/user.component';
import { ModalComponent } from '@/users/components/modal/modal.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UserComponent, CommonModule, ModalComponent],
  templateUrl: './list.component.html',
})
export default class ListComponent {
  users = signal<User[]>([]);
  constructor(private userService: UserService) {}
  ngOnInit(changes: SimpleChanges) {
    //this.userService.getAll(20);
    this.getUsers();
  }

  public showModal = false;


  getUsers() {
    this.userService.getAll(20).subscribe({
      next: (users) => {
        this.users.set(users);
        console.log(users.length);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  isValid(event: boolean) {
    console.log(event);
    if (event) {
      this.showModal = true;
    }
  }
}
