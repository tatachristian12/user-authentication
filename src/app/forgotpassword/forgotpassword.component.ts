import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  imports: [RouterLink],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  // Forgotpassword component
  forgotAccount = signal ("Forgotten Account")
  findAccount = signal ("Find your account")
  searchAccount = signal ("Please enter your email address or mobile number to search for your account.")
}
