import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './signin-view.component.html',
  styleUrl: './signin-view.component.scss'
})
export class SigninViewComponent {

  

  loginFormGroup = new FormGroup({
    mail: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private userService: UserService) {}

  onSubmit(form: FormGroup) {
    this.userService.signin(form.value).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })
  }
}
