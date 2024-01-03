import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


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
