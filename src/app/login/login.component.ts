import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  image: string = "/facebooklogo.svg";

  // Login component
  subTitle = signal ("Facebook helps you connect and share with the people in your life");
  forgotPass = signal ("Forgotten Password");
  Create = signal ("Create an account");
}
