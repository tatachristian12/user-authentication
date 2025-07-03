import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userauthentication';
}
