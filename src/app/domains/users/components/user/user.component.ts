import { User } from '@/shared/models/users.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '@/shared/services/user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({ required: true }) User!: User;
  @Output() isVaLidEmail = new EventEmitter();

  constructor(private userService: UserService) {}

  checkEmail(email: string) {
    this.userService.CheckEmail(email).subscribe({
      next: (data) => {
        this.isVaLidEmail.emit(data as boolean);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
